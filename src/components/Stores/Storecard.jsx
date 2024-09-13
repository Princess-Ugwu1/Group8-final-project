import React from 'react'
import './storeCard.css'
import { useNavigate } from 'react-router-dom'
import storePix1 from '../../assets/Iyachidimma.png'
import storePix2 from '../../assets/MamaAlake.png'
import storePix3 from '../../assets/BabaChuks.png'
import storePix4 from '../../assets/MamaChichi.png'
import storePix5 from '../../assets/AdeKStore.png'


const Storecard = () => {
    const nav = useNavigate()
    const storeCards = [
        { id: 'card1',
            img: storePix1,
            
         },
        { id: 'card2',
            img: storePix2
         },
        { id: 'card3',
            img: storePix3
        },
        { id: 'card4',
            img: storePix4
        },
        { id: 'card5',
            img: storePix5
         },
    ]

    return (
        <div className='storeCardWrapper'>
            <div className="storeCardContainer">
                {
                    storeCards.map((card) => (
                        <div className="storeCards"
                            onClick={() => nav('/items')}
                            id={card.id}
                        >
                            <div className="storePic">
                                <img src= {card.img} alt="" />
                            </div>
                            <div className="storeDescription">
                                <p>Iya Chidinma Store</p>
                                <span>[Meat and poultry]</span>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}



export default Storecard