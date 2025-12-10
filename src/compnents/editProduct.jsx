import { useState, useEffect } from "react";

function Editprouct() {
    //뒤로가는 버튼
    function back() {
        history.back();
    }

    const [newStock, setNewStock] = useState(0);
    const [list, setList] = useState([]);
        useEffect(() => {
            async function load() {
                const response = await fetch(`http://localhost:8080/dbprod`);
                const data = await response.json();
                setList(data);
            }
            load();
        }, []);
    //상품재고 수정
    function update(pId,stock) {
    
       fetch("http://localhost:8080/dbprod", {
           method: "PUT",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({ pId ,stock })
       })
       .then(res => res.json())
       .then(() => {
            alert(`재고가 ${newStock}로 수정되었습니다.`)
       })
       .catch(err => console.error(err))
    }


    return(
        <>
        <h2>상품 관리(재고수정)</h2>
        <button onClick={back}>이전</button>

            {list.map(item => (
                <div key={item.pId} className="pbox">
                    <p>상품명: {item.pName}</p>
                    <p>상품 설명: {item.description}</p>
                    <p>카테고리: {item.pcategory}</p>
                    <p>가격: {item.pPrice}</p>

                    <input type="number" 
                    defaultValue={item.stock}
                    onChange={(e) =>setNewStock(e.target.value) }/>
                    <button onClick={() => update(item.pId, newStock)}>수정</button>
                </div>
                
            ))}
             
        </>
    )
}
export default Editprouct;