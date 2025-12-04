import {useNavigate} from "react-router-dom"

function addmain() {
    const com = useNavigate();

    function productclick() {
        com('/product')
    }
    function cartaclick() {
        com('/cart')
    }
    return(
        <> 
        
        <p>메인페이지</p>
        <button onClick={productclick}>상품등록창으로 이동</button>
        </>
    )
}

export default addmain;