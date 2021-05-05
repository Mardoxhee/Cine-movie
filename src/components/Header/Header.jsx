import React from 'react'
import Search from './Header-Right/Search'
import HeaderStyle from './HeaderStyle'
import LeftSide from './LeftSide'




const Header = () => {
    return (

     <HeaderStyle>
         <LeftSide/>

         <Search/>

     </HeaderStyle>
    )
}

export default Header
