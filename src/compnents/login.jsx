import {useNavigate} from "react-router-dom"

function login() {
    const com = useNavigate();
    function addclick() {
        com('/product')
    }
    return(
        <> 
        <p>로그인창</p>
        <button onClick={addclick}>상품등록창으로 이동</button>
        </>
    )
}

export default login;