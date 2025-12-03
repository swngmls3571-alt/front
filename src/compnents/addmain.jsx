import {useNavigate} from "react-router-dom"

function addmain() {
    const com = useNavigate();
    function addclick() {
        com('/member')
    }
    return(
        <> 
        <p>메인페이지</p>
        <button onClick={addclick}>회원가입창으로 이동</button>
        </>
    )
}

export default addmain;