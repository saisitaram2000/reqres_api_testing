import React, { Component } from 'react'
import UserCard from './UserCard';
import './User.css';
import Button from '@material-ui/core/Button';
const API_BASE_URL = "https://reqres.in/api/users/";
export default class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:{}
        }
        this.id = this.props.match.params.user_id;
    }
    componentDidMount = () =>{
        const API_URL=API_BASE_URL+this.id;
        fetch(API_URL)
        .then(response => response.json())
        .then(data => {this.setState({data:data.data})})
        .catch(error => console.log(error));
    }
    render() {
        return (
            <div className="user-page">
                <div className="view-all-users-button">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={()=>{this.props.history.push("/")}}
                    >
                        VIEW ALL USERS
                    </Button>
                </div>
                {this.state.data!==undefined?
                    <div className="user-card">
                        <UserCard user={this.state.data}/>
                    </div>:
                    <div className="user-no-data">
                        <img className="user-no-data-img"  src="./nodata.jpg" alt="nodata"></img>
                    </div>
                }
            </div>
        )
    }
}
