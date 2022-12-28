import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Category.module.css"

export default function Category() {
  
  return (
    <div className={style.Category_container}>
      <div className={style.Category_heading}>
        <h1>Shop by Categories</h1>
        <h3>Freshest meats just for you</h3>
        </div>

      <div className={style.Category_parent}>
        <div className={style.Category_parent_div1}>
          <div className={style.imgbox}>
            <Link to={"/"}>
              <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png" alt="" />
            </Link>
          </div>
          <h2>Todays Deals</h2>
        </div>
        <div className={style.Category_parent_div1}>
          <div className={style.imgbox}>
            <Link to={"/Chicken"}>

              <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png" alt="" />

            </Link>
          </div>
          <h2>Chicken</h2>
        </div>
        <div className={style.Category_parent_div1}>

          <div className={style.imgbox}>
            <Link to={"/fishdata"}>

              <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png" alt="" />


            </Link>
          </div>
          <h2>Fish & Seafood</h2>
        </div>
        <div className={style.Category_parent_div1}>

          <div className={style.imgbox}>
            <Link to={"/Mutton"}>

              <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png" alt="" />


            </Link>

          </div>
          <h2>Mutton</h2>
        </div>
        <div className={style.Category_parent_div1}>
          <div>

          </div>
          <div className={style.imgbox}>
            <Link to={"/ReadyCook"}>

              <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png" alt="" />


            </Link>
          </div>
          <h2>Ready to Cook</h2>
        </div>
            <div className={style.Category_parent_div1}>
          <div className={style.imgbox}>
            <Link to={"/Prawn"}>
              <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png" alt="" />
            </Link>
          </div>
          <h2>Prawn</h2>
        </div>

        <div className={style.Category_parent_div1}>
          <div className={style.imgbox}>
            <Link to={"/"}>
              <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png" alt="" />
            </Link>
          </div>
          <h2>Coldcuts</h2>
        </div>

        <div className={style.Category_parent_div1}>

          <div className={style.imgbox}>
            <Link to={"/Spread"}>

              <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png" alt="" />

            </Link>
          </div>
          <h2>Spreads</h2>

        </div>
        <div className={style.Category_parent_div1}>
          <div className={style.imgbox}>
            <Link to={"/"}>
              <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png" alt="" />
            </Link>
          </div>
          <h2>Eggs</h2>
        </div>
        <div className={style.Category_parent_div1}>
          <div className={style.imgbox}>
            <Link to={"/"}>
              <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png" alt="" />
            </Link>
          </div>
          <h2>Biryani</h2>
        </div>
        <div className={style.Category_parent_div1}>
          <div className={style.imgbox}>
            <Link to={"/"}>
              <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/69b72338-4180-2631-b175-04265b1e5c7a/original/Combo_(2).png" alt="" />

            </Link>
          </div>
          <h2>Combo</h2>
        </div>
        <div className={style.Category_parent_div1}>
          <div className={style.imgbox}>

            <Link to={"/"}>
              <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png" alt="" />
            </Link>
          </div>
          <h2>PBM</h2>
        </div>
      </div>
    </div>
  )
}
