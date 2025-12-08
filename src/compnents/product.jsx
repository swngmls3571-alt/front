import { useState } from "react";
function Product() {
    const [pName, setpName] = useState("")
    const [pPrice, setpPrice] = useState("")
    const [description, setdescription] = useState("")
    const [stock, setStock] = useState("")

    
    function saveProduct() {
        fetch("http://localhost:8080/dbprod", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pName, pPrice, description, stock })
        })
            .then(res => {
                if(!res.ok){
                    return res.json().then(data => {
                        throw new Error(data.message);
                    })
                }
                return res.json();
            })
            .then(data => {
                console.log("상품등록", data);
                alert(`상품등록 완료\n 상품이름: ${pName}\n 재고수량: ${stock}`)
                setpName("");
                setpPrice("");
                setdescription("");
                setStock("");
            })
        .catch(err => {
            alert(err.message);
        })
    }


    return (
        <>
            <p>상품등록창</p>
            <div className="pimg">
                <img src="../img/img.jpg" alt="상품 이미지" />
                <div>
                    <p>이름: <input value={pName} onChange={(e) => setpName(e.target.value)} /></p>
                    <p>가격: <input value={pPrice} onChange={(e) => setpPrice(e.target.value)} /></p>
                    <p>설명:<input value={description} onChange={(e) => setdescription(e.target.value)} /></p>
                    <p>재고:<input value={stock} onChange={(e) => setStock(e.target.value)} /></p>
                </div>
                <button onClick={saveProduct}>상품저장</button>
            </div>
        </>
    )
}

export default Product;