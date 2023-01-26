import Parent from "../Parent/Parent";
export default function Mutton({handleQuantityIncreament,handleQuantityDecreament,handlePost}) {
    let food="Mutton_Data"
   let fill1="Curry Cut"
   let fill2="Boneless"
   let fill3="Ready"
   let src1="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c28b264a-ee5e-1661-2715-97c9bbfba1f3/original/Mu.png";
   let src2="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/26089646-133c-648e-21ac-3f01ddb8b30b/original/Curry-Cut.png";
   let src3="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cf919d27-7d51-337b-0324-2cfb79bbf09f/original/Boaneless_mince.png";
   let src4="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/935c4a62-1dfb-8697-8231-7123663f4d28/original/Galowti_kebab.png";
    return(
<Parent props={{ handleQuantityIncreament, handleQuantityDecreament, handlePost ,food,fill1,fill2,fill3,src1,src2,src3,src4}}/>


    )
}
