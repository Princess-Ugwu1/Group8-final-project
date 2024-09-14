import "./WhatYou.css"
import { RiSecurePaymentFill } from "react-icons/ri";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdAssignmentReturn } from "react-icons/md";

const WhatYou = () => {
  return (
    <div className='secondParent'>
        <div className='firstHold'>
            <h1 style={{color: "black"}}>what you'll get</h1>
            <div className='stores2'>
                <div className='allGet'>
                    <BsFillQuestionCircleFill color='green' size={30}/>
                    <p>Active support</p>
                    <span>Our support team is always 
                    on standby, so you can call 
                    us at any time.
                    </span>
                </div>
                <div className='allGet'>
                    <RiSecurePaymentFill color='red' size={30}/>
                    <p>Secure Payment</p>
                    <span>
                        You can be rest assured that 
                        your payments are secured, 
                        as we have different reliable 
                        payment methods for you
                    </span>
                </div>
                <div className='allGet'>
                    <MdAssignmentReturn color='#f2a929' size={30}/>
                    <p>Eazy Returns</p>
                    <span>
                        What you order is what you get 
                        but just in case, you are free to 
                        return anything you are not okay 
                        with by reaching out to us.

                    </span>
                </div>
                
            </div>
        </div>
    </div>
  )
};

export default WhatYou