import React from 'react'
import './storeCard.css'
import { useNavigate } from 'react-router-dom'
import { StoreData } from './StoreData'
const Storecard = () => {
    const nav = useNavigate()

    return (
        <div className='storeCardWrapper'>
            <div className="storeCardContainer">
                {
                    StoreData?.map((card) => (
                        <div className="storeCards"
                            onClick={() => nav(`/items/${card?.data?._id}`)}
                            id={card.id}
                        >
                            <div className="storePic">
                                <img src= {card.data?.profileImage} alt="" />
                            </div>
                            <div className="storeDescription">
                                <p>{card?.data?.businessName}</p>
                                <span>{card?.data?.description}</span>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}



export default Storecard