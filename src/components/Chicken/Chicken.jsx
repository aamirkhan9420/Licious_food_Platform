import Parent from '../Parent/Parent'
export default function Chicken({ handleQuantityIncreament, handleQuantityDecreament, handlePost }) {
    
   let food="Chicken_Data"
   let fill1="Curry Cut"
   let fill2="Boneless"
   let fill3="Ready"
   let src1="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ccbbaf22-e0c7-32cc-e3a2-8ca49beb585b/original/Chicken_(1).png";
   let src2="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5da469b3-75b9-685f-7ab7-0ab8b695d84f/original/Curry-Cuts.png";
   let src3="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caeb5c62-eada-9f92-430f-acced72a1dd3/original/Boneless-_-mince.png";
   let src4="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/9ca57aa9-7fe9-16ee-c265-893b41fe7e78/original/Combos.png";

  
    return (
      
        <Parent props={{ handleQuantityIncreament, handleQuantityDecreament, handlePost ,food,fill1,fill2,fill3,src1,src2,src3,src4}}/>
    )
}
