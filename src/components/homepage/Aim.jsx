import React from 'react'
import './Aim.css'
import { RiSecurePaymentFill } from "react-icons/ri";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdAssignmentReturn } from "react-icons/md";

const Aim = () => {
    const topicsArray = [
        {
          icon: <BsFillQuestionCircleFill color='green' size={30}/>,  // You can replace this with actual icon components if using a library like react-icons
          subTopic: 'Active Support',
          content: 'Our support team is always on standby, so you can call us at any time'
        },
        {
          icon: <RiSecurePaymentFill color='red' size={30}/>,
          subTopic: 'Secure Payment',
          content: 'You can be rest assured that your payments are secured, as we have different reliable payment methods for you'
        },
        {
          icon: <MdAssignmentReturn color='#f2a929' size={30}/>,
          subTopic: 'Easy Return',
          content: 'What you order is what you get but just in case, you are free to return anything you are not okay with by reaching out to us.'
        }
        
      ];
      
  return (
    <div className='aimDivWrapper'>
        {
            topicsArray.map((aim)=>(
                <div className="aimDescription">
                <div className="iconDiv">{aim.icon}</div>
                <div className="aimSubTopicDiv"><p>{aim.subTopic}</p></div>
                <div className="aimContents"><span>{aim.content}</span></div>
            </div>
            ))
        }
       
    </div>
  )
}

export default Aim