import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <nav className='navbar navbar-expand-lg bg-info navbar-dark fixed-top'>
                    <div className="container">
                        <a href="#" className="navbar-brand">
                            {this.props.title}
                        </a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link to='/' className='nav-link'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/users' className='nav-link'>Users</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
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
