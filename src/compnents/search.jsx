import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Search() {
    const [result, setResult] = useState([]);
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const keyword = searchParams.get("keyword") || "";

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:8080/dbprod?keyword=${keyword}`);
            const data = await response.json();
            setResult(data);
        }
        load();
    }, [keyword]);

    return (
        <>
            <h2>전체메뉴{keyword}</h2>

            {result.length === 0 && <p>검색 결과 없음</p>}
            
            {result.map(item => (
                <div key={item.pId} className="mun">
                    <p>{item.pName}</p>
                    <p> {item.pPrice}원</p>
                </div>
            ))}
        </>
    );
}

export default Search;
