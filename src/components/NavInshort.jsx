import './NavInshort.css'
import React from 'react'
import Hamburger from './Hamburger';

const NavInshort = ({ setCategory }) => {
    return (
        <div className='nav'  >
            <div className="icon">

                <Hamburger setCategory={setCategory} />

            </div>
            <img src='https://static.inshorts.com/inshorts-website/static_assets/bundle_assets/2023/06_jun/7_wed/dd4532e5691e2d1c35bbe871b456c4938b3a6691.logo.png' alt='...' height='80%' />
        </div>
    )
}

export default NavInshort
