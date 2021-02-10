import { React, NavLink } from "react";
import "./Header.scss";

const Header = () => {
    return (
        <div className="container">
            <img src="https://i.pinimg.com/originals/85/7f/d7/857fd79dfd7bd025e4cbb2169cd46e03.png" alt="wave emoji" className="wave" width="10%" />
            <h1 className="hello">Hey, I'm Ella.</h1>
            <div className="navigation">
                <ul className="nav">
                    <li className="list-item"><a href="#"> [about] </a></li>
                    <li className="list-item"><a href="#"> [projects] </a></li>
                    <li className="list-item"><a href="#"> [experience] </a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header