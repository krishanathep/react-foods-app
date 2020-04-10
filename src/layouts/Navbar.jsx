import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <nav className='navbar navbar-expand-lg bg-info navbar-dark'>
                    <div className="container">
                        <a href="#" className="navbar-brand">
                            {this.props.title}
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
