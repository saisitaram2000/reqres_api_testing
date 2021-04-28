import React, { Component } from 'react'
import './UserCard.css';

export default class UserCard extends Component {
    render() {
        const {id,email,first_name,last_name,avatar}=this.props.user;
        return (
            <div className="reqres-user" key={id}>
                        <div className="reqres-user-image">
                            <img 
                                className="reqres-user-img" 
                                src={avatar} 
                                alt={first_name}
                           />
                        </div>
                        <div className="reqres-user-details">
                            <div className="reqres-user-name">
                               {first_name} {last_name}
                           </div>
                           <div className="reqres-user-email">
                               {email}
                           </div>
                        </div>
                    </div>
        )
    }
}
