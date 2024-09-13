import "./Layout12.css"
import pp1 from "../../../public/pp1.svg"
import pp2 from "../../../public/pp2.svg" 
import pp4 from "../../../public/pp4.svg"

 const LayoutPage = () => {
    return (
      <div className='Main-Container'>
        <div className="box">Stores on Groceria</div>
          <div className='Cards'>
              <div className='stores'>
                  <div className='Box1'>
                      <div className='storeimage'>
                          <img src="./pp1.svg" alt="" />
                      </div>
                      <p>Iya chidinma store</p>
                      <p1>[Meat and Poultry]</p1>
                  </div>
                  <div className='Box2'>
                      <div className='storeimage'>
                          <img src="./pp2.svg" alt="" />
                      </div>
                      <p>Mama Alake Store</p>
                      <p1>[Bakery Items]</p1>
                  </div>
                  <div className='Box3'>
                      <div className='storeimage'>
                          <img src="./pp4.svg" alt="" />
                      </div>
                      <p>Baba Chukks Store</p>
                      <p1>[Grains and Staples]</p1>
                  </div>
              </div>
          </div>
      </div>
    )
  }

  export default LayoutPage