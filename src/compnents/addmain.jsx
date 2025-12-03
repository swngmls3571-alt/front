import {useNavigate} from "react-router-dom"

function addmain() {
    const com = useNavigate();
    function memberclick() {
        com('/member')
    }
    function loginclick() {
        com('/login')
    }
    function productclick() {
        com('/product')
    }
    function cartclick() {
        com('/cart')
    }
    return(
        <> 
        <p>메인페이지</p>
        <button onClick={memberclick}>회원가입창으로 이동</button>
        <button onClick={loginclick}>로그인창으로 이동</button>
        <button onClick={productclick}>상품등록창으로 이동</button>
        <button onClick={cartclick}>장바구니창으로 이동</button>
        </>
    )
}

export default addmain;