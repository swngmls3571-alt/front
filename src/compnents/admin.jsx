import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

function Admin() {
    return(
        <>
        <h2>관리자 페이지</h2>
        <button><Link to={"/product"}>상품 등록</Link></button>
        <button><Link to={"/editProduct"}>상품 관리(재고수정)</Link></button>
        </>
        
    )
}
export default Admin;