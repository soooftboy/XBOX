import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { SlArrowDown } from "react-icons/sl";
import { Logo } from '../img/Logo';

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <a href="#" className="header__logo-link"><Logo /></a>
                    </div>
                    <div className="header__menu menu-header">
                        <ul className="menu-header__nav nav-header">
                            <li className="nav-header__item">
                                <a href="#" className="nav-header__link">
                                    Games
                                    <SlArrowDown className="nav-header__icon" />
                                </a>
                            </li>
                            <li className="nav-header__item">
                                <a href="#" className="nav-header__link">
                                    Consoles
                                    <SlArrowDown className="nav-header__icon" />
                                </a>
                            </li>
                            <li className="nav-header__item">
                                <a href="#" className="nav-header__link">Community</a>
                            </li>
                        </ul>
                        <input type="text" name="search" id="search" placeholder="Search" className="menu-header__search" />
                        <div className="menu-header__user user-block">
                            <AiOutlineUser className="user-block__user-icon" />
                            <span className="user-block__text">My XBOX</span>
                            <SlArrowDown className="user-block__arrow-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
