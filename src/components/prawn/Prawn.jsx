import Parent from "../Parent/Parent"
export default function Prawn({ handleQuantityIncreament, handleQuantityDecreament, handlePost }) {
    let food = "Prawn"
    let fill1 = "Small"
    let fill2 = "Medium"
    let fill3 = "Ready"

    let src1 = "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0648f953-0d66-e58d-d0c0-74611b65c576/original/Prawn.png"
    let src2 = "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/adc7342a-6136-0853-407e-7cd2a81fee8e/original/Smallest.png"
    let src3 = "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5c84378f-b90a-3860-d490-6397dbd1f0c2/original/mideum.png"
    let src4 = "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c17b68d2-aa90-d266-04fe-f63bea8ae982/original/AMritsari.png"
   
    
    return (
    
        <Parent props={{ handleQuantityIncreament, handleQuantityDecreament, handlePost, food, fill1, fill2, fill3, src1, src2, src3, src4 }} />

    )
}
