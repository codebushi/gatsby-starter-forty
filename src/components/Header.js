import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
