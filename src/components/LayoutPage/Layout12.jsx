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
                          <img src="./pp1.svg" alt="" />
                      </div>
                      <p>Iya chidinma store</p>
                  </div>
                  <div className='storehold2'>
                      <div className='storeimage'>
                          <img src="./pp2.svg" alt="" />
                      </div>
                      <p>Iya chidinma store</p>
                  </div>
                  <div className='storehold3'>
                      <div className='storeimage'>
                          <img src="./pp4.svg" alt="" />
                      </div>
                      <p>Iya chidinma store</p>
                  </div>
              </div>
          </div>
      </div>
    )
  };

  export default Layout12