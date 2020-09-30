import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.img} src = 'https://i.pinimg.com/originals/2a/b5/b0/2ab5b0b6cf06e5a5e1b911dee8373b2c.png' />
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div> {props.login} - <button onClick={props.logout}> Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;