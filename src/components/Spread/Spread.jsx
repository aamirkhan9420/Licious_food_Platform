import Parent from '../Parent/Parent'
export default function Spread({ handleQuantityIncreament, handleQuantityDecreament, handlePost }) {
    let food="sauce"
    let fill1="Chicken"
    let fill2="Egg"
    let fill3="Combo"

   let  src1="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/465efa7b-69c5-9a07-e7ff-3b05a05f59c9/original/Spread_Bottle1.png"
   let  src2="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/547764cb-2801-013b-9624-eebe25d9635b/original/chicken.png" 
   let  src3="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/95cc9fb8-eeca-1034-686e-d64c366c936f/original/egg.png"  
   let  src4="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/93cf2977-8162-5553-a488-c0c312d67b58/original/Combo.png"
   
    return (
        
        <Parent props={{ handleQuantityIncreament, handleQuantityDecreament, handlePost ,food,fill1,fill2,fill3,src1,src2,src3,src4}}/>

    )
}
