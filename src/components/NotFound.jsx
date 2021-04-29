import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
export default class NotFound extends Component {
    render() {
        return (
            <div>
                 <div className="view-all-users-button">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={()=>{this.props.history.push("/")}}
                    >
                        VIEW ALL USERS
                    </Button>
                </div>
                <br/>
                <br/>
                <div className="page-notfound">
                    <img className="page-notfound-img"  src="./notfound.png" alt="notfound" ></img>
                </div>
            </div>
        )
    }
}
