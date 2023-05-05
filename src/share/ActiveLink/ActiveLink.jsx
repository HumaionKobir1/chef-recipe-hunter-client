import React from 'react';
import { NavLink } from "react-router-dom";
import './ActiveLink.css'

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive }) =>
             isActive ? "active px-3 bg-orange-400 text-white py-1" : ""
        }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;