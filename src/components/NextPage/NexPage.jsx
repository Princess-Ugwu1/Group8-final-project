import "./NextPage.css"
import img3 from "../../../public/img3.svg" 
import img4 from "../../../public/img4.svg"
import vector from "../../../public/Vector.svg"

const NextPage = () =>{
    return(
        <div className="NextPage-container">
            <div className="Second-container">
                <div className="boo1">
                <img src={img3} alt="" />
                <p>+234 9077137226</p>
                </div>
                <div className="boo2">
                <img src={img4} alt="" />
                <p>groceria.stores@gmail.com</p>
                </div>
                <div className="boo3">
                <img src={vector} alt="" />
                <p>Lagos, Nigeria.</p>
                </div>
            </div>
        </div>
    )
};
export default NextPage