import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(props) {
    const navbarClass = `navbar navbar-expand-lg ${props.mood === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"}`;

    return (
        <nav className={navbarClass}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.name}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="form-check form-switch text-light" style={{ fontSize: '15px', marginRight: '10px' }}>
                <input
                    className="form-check-input"
                    onClick={props.toggle}
                    type="checkbox"
                    role="switch"
                    id="switchCheckDefault"
                    aria-label="Toggle theme"
                />
                <label className="form-check-label" htmlFor="switchCheckDefault" style={{color : (props.mood === 'light' ? 'black' : 'white')}}>Switch Mood</label>
            </div>
        </nav>
    );
}
export default Navbar;
