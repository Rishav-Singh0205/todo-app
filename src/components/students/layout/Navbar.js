import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = () => {
    return (
        <nav className="navBar navbar navbar-light bg-dark justify-content-between">
            <Link to="/" className="navtext">TODO APP</Link>
            <form className="btn1 form-inline">
                <Link to="/students/create">
                    <button className="addbtn btn btn-outline-success my-2 my-sm-0" type="submit">
                        Add Students </button></Link>
            </form>
        </nav>

    )
}

export default Navbar