import { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"


function Header() {
    const [search, setSearch] = useState(""); // 입력값
    const [data, setData] = useState([]); // 전체 상품
    const [searchResult, setSearchResult] = useState([]); //검색 결과값
    const navigate = useNavigate();
    
    useEffect(() => {
        async function test() {
            const response = await fetch('http://localhost:8080/dbprod');
            const data = await response.json();
            setData(data);
        }
       
        test();
    }, []);
    //검색 필터링부분
    //검색할때 해당 상품들만 골라주는 역할
    //검색창 테스트 완료! ex)로션을 "로"만 쳐도 로션관련된거 나오게 출력
    function onClick() {
        const filterData = data.filter(item =>
            (item.pName || "").toLowerCase().includes((search || "").toLowerCase()) ||// 화면에 나오게
            (item.pcategory + "").toLowerCase().includes((search || "").toLowerCase())
        );
        navigate(`/search?keyword=${search}`, {
            state: { result: filterData }
        });
        // navigate("/search", { state: { result: filterData } });
        // setSearchResult(filterData);
        // console.log(search)/

    }
    return (
        <>
            <header id="Header">
                <div className="main">
                    <ul>
                        <li><Link to={"/member"}>회원가입</Link></li>
                        <li><Link to={"/login"}>로그인</Link></li>
                        <li><Link to={"/cart"}>장바구니</Link></li>
                        <li><Link to={"/mypage"}>마이페이지</Link></li>
                        <li><Link to={"/admin"}>관리자페이지</Link></li>
                    </ul>
                </div>
                <div className="logo">
                    <h1><Link to={"/"}>로고</Link></h1>
                    <input type="text" value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="상품 검색하세요" />
                        <button value={search} onClick={onClick} className="but">
                            <img src="./img/imgg.png" alt="돋보기"/>
                        </button>
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
export default Header;