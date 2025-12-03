import {useNavigate} from "react-router-dom"

function member() {
    const com = useNavigate();
    function addclick() {
        com('/login')
    }
    return(
        <> 
        <p>회원가입창</p>
        <button onClick={addclick}>로그인창으로 이동</button>
        </>
    )
}

export default member;