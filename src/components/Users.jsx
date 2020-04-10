import React, { Component } from 'react'

export class Users extends Component {
    constructor() {
        super()

        this.state = {
            users: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ users: users }))
    }

    render() {
        return (
            <div className='Users'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mt-5">
                            <div className="card-body">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.users.map(user => (
                                        <tr>
                                                <td><img alt="picture" className='avatar' src={`https://robohash.org/${user.id}?set=set2&size=200x200`} /></td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users
