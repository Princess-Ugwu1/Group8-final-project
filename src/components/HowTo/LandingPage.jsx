
import ShopLayout from '../ShopLayout/ShopLayout'
import LayoutPage from '../LayoutPage/Layout12'
import WhatYou from '../WhatYou/WhatYou'
import Last from '../ShopLayout/ShopLayout'
import Layout from '../../layout/Layout'
import Howto from './HowTo'
import HeroPage from './HeroPage/HeroPage'
// import WhatYou from './ThirdPage/WhatYou'


function LandingPage() {
return (
    <>
    <div className=''>
      <HeroPage/>
     <LayoutPage/>
     <WhatYou/>
     <Howto/>
     <Last/>
     </div>
    </>
  )
}

export default LandingPage