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
                <h1>404 page not found</h1>
            </div>
        )
    }
}
