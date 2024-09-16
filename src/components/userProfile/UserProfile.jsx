import React from 'react'
import './UserProfile.css'

const UserProfile = () => {
    
  return (
    <div className='userProfileWrapper'>
        <div className="profileLeft">
            <div className="profileLogo">
                <img src="././Logo.svg" alt="" />
            </div>
            <div className="profileItem">
                <div className="profilePixSide"></div>
                <div className="profileDetailsContainer">
                    <p>Princess Ugwu Onyinyechuwu</p>
                    <span>welcome to your princessUgwu309@gmail.com</span>
                </div>
            </div>
        </div>
        <div className="profileRight">
        <div className="RightInner">
            <div className="subTopic">Profile Details</div>
            <form className='profileForm'>
                <div className="ProfileInputDiv">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" placeholder='John' />
                </div>
                <div className="ProfileInputDiv">
                    <label htmlFor="firstName">Last Name</label>
                    <input type="text" placeholder='Doe' />
                </div>
                <div className="ProfileInputDiv">
                    <label htmlFor="firstName">E-mail</label>
                    <input type="text" placeholder='email@example.com' />
                </div>
                <div className="ProfileInputDiv">
                    <label htmlFor="firstName">Number</label>
                    <input type="text" placeholder='number' />
                </div>
            </form>
        </div>
        
        </div>
      
    </div>
  )
}

export default UserProfile