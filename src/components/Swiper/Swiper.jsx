import React, { useRef, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

export default function SwiperFunc({ foodData, handleQuantityIncreament, handleQuantityDecreament, handlePost }) {
    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(9);
    const prependNumber = useRef(1);
    let cartData = useSelector((state) => {
        return state.AppReducer.cartData
    })
    let checkQuantity = (el) => {
        let ans = cartData.length > 0 && cartData.map((item) => {


            if (item.id === el.id) {

                return item.quantity
            }
        })
        return ans
    }
    // Create array with 500 slides
    const [slides, setSlides] = useState(
        Array.from({ length: 9 }).map((_, index) => `Slide ${index + 1}`)
    );

    const prepend = () => {
        setSlides([
            `Slide ${prependNumber.current - 2}`,
            `Slide ${prependNumber.current - 1}`,
            ...slides,
        ]);
        prependNumber.current = prependNumber.current - 2;
        swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    };

    const append = () => {
        setSlides([...slides, 'Slide ' + ++appendNumber.current]);
    };

    const slideTo = (index) => {
        swiperRef.slideTo(index - 1, 0);
    };

    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                spaceBetween={15}
                navigation={true}
                virtual

            >
                {foodData.length > 0 && foodData.map((el, index) => (
                    <SwiperSlide key={el.index} virtualIndex={index}>
                        <Link to={"/SinglePage"} state={el} className="link">
                            <img src={el.imgUrl} alt="" />
                        </Link>
                        <Link to={"/SinglePage"} state={el} className="link">
                            <div className='prod_detail'>
                                <h2>{el.name}</h2>
                                <p>{el.des}</p>
                                <h2>{el.gross}{el.unit}</h2>
                            </div>
                        </Link>
                        <div className='prod_price_btn_div'>
                            <h1>{el.price_tag}{el.cuurency}{el.price}</h1>

                            {cartData.length > 0 && cartData.find(({ id }) => id === el.id) !== undefined ?
                                <div className="add_remove_btn_div"><button onClick={() => handleQuantityDecreament(el.id)}>-</button><h1>{checkQuantity(el)}</h1><button onClick={() => handleQuantityIncreament(el.id)}>+</button></div>
                                : <button onClick={() => handlePost(el)}>ADD TO CART</button>}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


        </>
    );
}
