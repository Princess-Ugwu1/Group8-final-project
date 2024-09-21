import "./Layout12.css"
import pp1 from "../../../public/pp1.svg"
import pp2 from "../../../public/pp2.svg" 
import pp4 from "../../../public/pp4.svg"

const Layout12 = () => {
    return (
      <div className='firstParent'>
          <div className='firstHold'>
              <h1>Stores on Groceria</h1>
              <div className='stores'>
                  <div className='storehold'>
                      <div className='storeimage'>
                          <img src="https://res.cloudinary.com/dg2gcfyud/image/upload/v1726230953/ljhhxqky9hpcqzrmwvcx.jpg" alt="" />
                      </div>
                      <p>Mama chidinma store</p>
                  </div>
                  <div className='storehold2'>
                      <div className='storeimage'>
                          <img src="https://res.cloudinary.com/dg2gcfyud/image/upload/v1726231612/zmubgzapfbzues84gbbb.jpg" alt="" />
                      </div>
                      <p>Iya Alake store</p>
                  </div>
                  <div className='storehold3'>
                      <div className='storeimage'>
                          <img src="https://res.cloudinary.com/dg2gcfyud/image/upload/v1726813015/WhatsApp_Image_2024-09-13_at_12.57.49_PM_u7h8l7.jpg" alt="" />
                      </div>
                      <p>Baba Chukks store</p>
                  </div>
              </div>
          </div>
      </div>
    )
  };

  export default Layout12