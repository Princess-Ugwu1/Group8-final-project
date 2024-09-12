import React from 'react'
import './storeCard.css'
import { useNavigate } from 'react-router-dom'


const Storecard = () => {
    const nav = useNavigate()
    const storeCards=[
        { id: 'card1'},
        { id: 'card2' },
        { id: 'card3'},
        { id: 'card4'},
        { id: 'card5'},
    ]

        return (
            <div className='storeCardWrapper'>
                {
                    storeCards.map((card)=>(
                        <div className="storeCards"
                        onClick={()=>nav('/items')}
                            id={card.id}
                           
                        >
                            <div className="storePic"></div>
                            <div className="storeDescription"></div>
                        </div>
                    ))
                }
              
            </div>
          )
    }

 

export default Storecard