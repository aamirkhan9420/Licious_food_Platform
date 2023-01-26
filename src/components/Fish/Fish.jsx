import React from 'react'
import Parent from '../Parent/Parent'
export default function Fish({ handleQuantityIncreament, handleQuantityDecreament, handlePost }) {
  let food="fish"

  let fill1="Freshwater"
  let fill2="Seawater"
  let fill3="Ready to Cook"
  let src1="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3e466619-abc2-c017-5140-788c2c90719b/original/FIsh.png";
  let src2="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/9d1aa6e6-2f69-131a-9938-77231e7c0c2a/original/Fresh-water.png";
  let src3="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/845dab73-6bc9-84a5-df80-057378225fd5/original/seawater.png";
  let src4="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c17b68d2-aa90-d266-04fe-f63bea8ae982/original/AMritsari.png";
    return (
       
        <Parent props={{ handleQuantityIncreament, handleQuantityDecreament, handlePost ,food,fill1,fill2,fill3,src1,src2,src3,src4}}/>

    )
}
