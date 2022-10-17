import React from "react"
import Logo from "../media/logo.svg"

export default function Header() {
    return (
        <nav className="header">
            <img src={Logo} alt="logo" className="logo"/>
            <h1 className="header-text">my travel jounal.</h1>
        </nav>
    )
}