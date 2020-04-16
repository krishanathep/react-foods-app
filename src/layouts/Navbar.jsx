import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <nav className='navbar navbar-expand-lg bg-info navbar-dark fixed-top'>
                    <div className="container">
                        <Link to={'/'} className="navbar-brand">
                            {this.props.title}
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={'/'} className='nav-link'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/users'} className='nav-link'>Users</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to={'#'} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to={'#'}>Action</Link>
                                    <Link className="dropdown-item" to={'#'}>Another action</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to={'#'}>Something else here</Link>
                                </div>
                            </li>
                            </ul>
                        </div>    
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
