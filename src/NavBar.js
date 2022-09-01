import React from "react";
import './App.css'
import './NavBar.css'

function NavBar() {
    return (
        <div>
            <nav>
                <div className="logo">Magic Eight Ball</div>
                <ul className="nav-links">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Products</a></li>
                    <li><a>Games</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;