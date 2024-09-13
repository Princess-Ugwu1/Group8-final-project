import "./WhatYou.css"
import { RiSecurePaymentFill } from "react-icons/ri";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdAssignmentReturn } from "react-icons/md";
const SecondPage = () => {
  return (
    <div className='secondParent'>
        <div className='firstHold'>
           <div className="box22">what you'll get</div>
            <div className='stores2'>
                <div className='allGet'>
                    <BsFillQuestionCircleFill color='green' size={30}/>
                    <p>Active support</p>
                    <p>Our support team is always </p>
                    <p>on standby, so you can call </p>
                     <p> us at any time.</p>
                
                </div>
                <div className='allGet'>
                    <RiSecurePaymentFill color='red' size={30}/>
                    <p>Secure Payment</p>
                    <p>  You can be rest assured that </p> 
                       <p> your payments are secured,</p> 
                       <p> as we have different reliable 
                       payment methods for you</p>
                    
                </div>
                <div className='allGet'>
                    <MdAssignmentReturn color='#f2a929' size={30}/>
                    <p>Eazy Returns</p>
                       <p> What you order is what you get </p>
                       <p> but just in case, you are free to </p>
                       <p> return anything you are not okay 
                        with by reaching out to us.</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SecondPage