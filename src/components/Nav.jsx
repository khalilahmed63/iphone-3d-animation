import React from 'react';
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

export default function Nav() {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li><img src={Logo} alt="Apple" /></li>
                    <li className=""><a href="" className="link-styled ">Store</a></li>
                    <li className=""><a href="" className="link-styled">Mac</a></li>
                    <li className=""><a href="" className="link-styled">iPad</a></li>
                    <li className=""><a href="" className="link-styled">iPhone</a></li>
                    <li className=""><a href="" className="link-styled">Watch</a></li>
                    <li className=""><a href="" className="link-styled">AirPods</a></li>
                    <li className=""><a href="" className="link-styled">Tv & Home</a></li>
                    <li className=""><a href="" className="link-styled">Entertainment</a></li>
                    <li className=""><a href="" className="link-styled">Accessories</a></li>
                    <li className=""><a href="" className="link-styled">Support</a></li>
                    <li className=""><img src={Search} alt="Search" /></li>
                    <li className=""><img src={Store} alt="Store" /></li>
                </ul>
            </div>
        </nav>
    )
}
