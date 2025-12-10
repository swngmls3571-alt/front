import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Search() {
    const location = useLocation();
    //url에서 keyword가져오기
    const keyword = new URLSearchParams(location.search).get("keyword") || "";
    // navigate에서 넘긴 result 가져오기
    const result = location.state?.result || []

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
            <h2>전체메뉴 "{keyword}"</h2>

            {result.length === 0 ? (<p>검색 결과 없음</p>) :
            
            <div className="PP">
                {result.map(item => (
                    <div key={item.pId}>
                        <div  className="pbox">
                            <img src={`http://localhost:8080${item.img}`} alt="{item.img}" />
                            <p>{item.pName}</p>
                            <p> {item.pPrice}원</p>
                        </div>
                    </div>
                ))}
            </div>
        
            }
        </>
    );
}

export default Search;
