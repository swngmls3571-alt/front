import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
function Product() {
    const [pName, setpName] = useState("")
    const [pPrice, setpPrice] = useState("")
    const [description, setdescription] = useState("")
    const [stock, setStock] = useState("")
    const useNav = useNavigate();
    const [imgString, setImgString] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    function handfile(e) {
        const file = e.target.files[0];
        setImgUrl(URL.createObjectURL(file))
        const reader = new FileReader(); // 문자열로 변환
        reader.readAsDataURL(file)
        reader.onload = () => {
            setImgString(reader.result)
        }
    }


    function saveProduct() {
        fetch("http://localhost:8080/dbprod", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pName, pPrice, description, stock })
        })
            .then(res => {
                //에러를 보냈는지 확인하는 조건문
                if (!res.ok) {
                    return res.json().then(data => {
                        throw new Error(data.message);
                    })
                }
                //정상이면 json데이터만 보냄
                return res.json();
            })
            .then(data => {
                console.log("상품등록", data);
                //알림창 띄게 했습니다
                alert(`상품등록 완료\n 상품이름: ${pName}\n 재고수량: ${stock}`)

                if(!confirm(`상품등록 더 진행하시겠습니까?`)) {
                    useNav('/search')
                }
                setpName("");
                setpPrice("");
                setdescription("");
                setStock("");
            })
            .then(() => window.location.reload()) // 빈칸

            .catch(err => {
                alert(err.message);
            })

    }

    return (

        <>
            <p>상품등록창</p>
            <div className="pimg">
                <input type="file" onChange={handfile} />
                {imgUrl && <img src={imgUrl} alt="미리보기 이미지" className="imgurl"/>}
                <div>
                    <p>이름: <input value={pName} onChange={(e) => setpName(e.target.value)} /></p>
                    <p>가격: <input value={pPrice} onChange={(e) => setpPrice(e.target.value)} /></p>
                    <p>설명:<input value={description} onChange={(e) => setdescription(e.target.value)} /></p>
                    <p>재고:<input value={stock} onChange={(e) => setStock(e.target.value)} /></p>
                </div>
                <button onClick={saveProduct}>등록하기</button>
            </div>
        </>
    )
}

export default Product;