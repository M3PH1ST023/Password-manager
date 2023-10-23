import React from "react";
import add from "../assets/add.png";
import edit from "../assets/edit.png";
import show from "../assets/show.png";
import del from "../assets/delete.png";
import home from "../assets/facebook.png";
import logout from "../assets/logout.png";
import "../css/styles.css";
import "../css/pages.css";

const Sidebar = () => {
    return (
        <div className="sidebar-menu">
            <div className="user">
                <ul>
                    <li>
                        <a href="/home">
                            <img className="user-icon" src={home} alt="user" />
                        </a>
                    </li>
                </ul>
            </div>
            <ul>
                <li>
                    <a href="/add">
                        <img src={add} alt="add Credentials" />
                    </a>
                </li>
                <li>
                    <a href="/edit">
                        <img src={edit} alt="edit Credentials" />
                    </a>
                </li>
                <li>
                    <a href="/show">
                        <img src={show} alt="show Credentials" />
                    </a>
                </li>
                <li>
                    <a href="/delete">
                        <img src={del} alt="delete Credentials" />
                    </a>
                </li>
            </ul>
            <div className="logout">
                <ul>
                    <li>
                        <a href="/">
                            <img src={logout} alt="delete Credentials" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
