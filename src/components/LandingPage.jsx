import HeroPage from '../components/HeroPage/HeroPage'
import HowTo from './HowTo/HowTo'
import ShopLayout from '../components/ShopLayout/ShopLayout'
import LayoutPage from './Layout/Layout12'
import WhatYou from './WhatYou/WhatYou'
import Last from '../components/ShopLayout/ShopLayout'
// import WhatYou from './ThirdPage/WhatYou'


function LandingPage() {
return (
    <>
    <div className=''>
     <HeroPage/>
     <LayoutPage/>
     <WhatYou/>
     <HowTo/>
     <Last/>
     </div>
    </>
  )
}

export default LandingPage