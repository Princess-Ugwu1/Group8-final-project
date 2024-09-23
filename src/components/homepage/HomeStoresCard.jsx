import React from 'react'
import './homeStoresCard.css'

const HomeStoresCard = () => {
    const HomeCard = [  {
        id: 'card1',
        name: "Iya chidinma store",
        img: "https://res.cloudinary.com/dg2gcfyud/image/upload/v1726231371/ouhyyc9heisnkj58aflw.jpg", // Replace with your image URL
      },
     {
        id: 'card2',
        name: "Iya chidinma store",
        img: "https://res.cloudinary.com/dg2gcfyud/image/upload/v1726231612/zmubgzapfbzues84gbbb.jpg", // Replace with your image URL
      },
    {
        id: 'card3',
        name: "Iya chidinma store",
        img: "https://res.cloudinary.com/dg2gcfyud/image/upload/v1726232228/zfnbdh2d78jdbgou29qd.jpg", // Replace with your image URL
      },]
  return (
   
    
        
            <div className='HomestoreCardWrapper'>
                <div className="HomeStoreCardContainer">
                    
                      {
                        HomeCard.map((key)=>(
                            <div className="HomestoreCards" id ={key.id}>
                                <div className="storePic">
                                    <img src= {key.img} alt="" />
                                </div>
                                <div className="HomestoreDescription">
                                    <p>{key.name}</p>
                                   
                                </div>
                            </div>

                        ))
                      } 
                            
                        
                    
                </div>
    
            </div>
        )
    }
    
    

export default HomeStoresCard;