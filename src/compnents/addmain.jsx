import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

function addmain() {
    const [data, setData] = useState([])
    //상품 불러오는 부분
    useEffect(() => {
        async function test() {
            const response = await fetch('http://localhost:8080/dbprod');
            const data = await response.json();
            setData(data);
        }
        test();
    }, []);
    //data안에 상품을 전부 출력
    return (
        <>
            <p>메인페이지</p>
            {data.map((item) => (
                <div key={item.pId} className="pbox">
                    <img src={`http://localhost:8080${item.img}`} alt="{item.img}" />
                    <p>상품명: {item.pName}</p>
                    <p>상품 설명: {item.description}</p>
                    <p>가격: {item.pPrice}</p>
                </div>
            ))}
        </>
    )
}

export default addmain;