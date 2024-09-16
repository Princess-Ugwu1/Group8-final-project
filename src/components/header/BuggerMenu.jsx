import React from 'react'
import "./bugermenu.css"
import { CgProfile } from "react-icons/cg";


const BuggerMenu = () => {
  return (
    <div className='BuggerMenu'>
             <div className='Bugger-Header'>
                {/* <div className='bugger-headerclose'>
                </div> */}
                <div className='bugger-profile-holder'>
                    <div className='bugger-profile'>
                       < CgProfile size="50px"/> 
                    </div>
                    <div className='bugger-profile-text-holder'>
                        <h5>Username</h5>
                        <p>username@gmail.com</p>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default BuggerMenu