import {useNavigate} from "react-router-dom"
function product() {
    const com = useNavigate();
    function addclick() {
        com('/cart')
    }
    return(
        <> 
        <p>상품등록창</p>
        <button onClick={addclick}>장바구니창으로 이동</button>
        </>
    )
}

export default product;