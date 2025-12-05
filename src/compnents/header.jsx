import { Link, useNavigate } from "react-router-dom";
function header() {
    return(
        <>
        <header  id="Header">
            <div className="main">
                <ul>
                    <li><Link to={"/member"}>회원가입</Link></li>
                    <li><Link to={"/login"}>로그인</Link></li>
                    <li><Link to={"/cart"}>장바구니</Link></li>
                    <li><Link to={"/mypage"}>마이페이지</Link></li>
                </ul>
            </div>
            <div className="logo">
                <h1><a href="http://localhost:5173/">로고</a></h1>
                검색창
            </div>
            <div className="menubox">
            <ul>
                <li><a href="#">전체메뉴</a></li> 
            </ul>
            <ul>
                <li><a href="#">베스트</a></li>
            </ul>
            <ul>
                <li><a href="#">신제품</a></li>
            </ul>
            <ul>
                <li><a href="#">고객지원</a></li>
            </ul>
        </div>
        </header>
        </>
    )
}
export default header;