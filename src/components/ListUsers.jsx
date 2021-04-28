import React, { Component } from 'react';
import './ListUsers.css';
import UserCard from './UserCard';
import Button from '@material-ui/core/Button';
import querystring from 'querystring';
const API_BASE_URL = "https://reqres.in/api/users";
export class ListUsers extends Component {
    constructor(props) {
        super(props)
        var query_path = window.location.search;
        const url_parse=querystring.parse(query_path.substring(1), null, null,null);
        console.log(url_parse.page);
        this.state = {
             page : url_parse.page,
             data : []
        }
    }
    fetchApi = (API_URL,page)=>{
        fetch(API_URL)
        .then(response => response.json())
        .then(data => {this.setState({data:data.data,page:page})})
        .catch(error => console.log(error));
    }
    updateApiUrl = page =>{
        let updated_api_url = API_BASE_URL;
        if(page!==undefined)
        updated_api_url+="?page="+page;
        return updated_api_url;
    }
    changeUrlPath = page =>{
        let path_url;
        if (page!==undefined){
            path_url="?page="+page;
        }else{
            path_url="/";
        } 
        const obj={
        title:"SpaceX",
        url:path_url
        }
        window.history.replaceState(obj,obj.title,obj.url);
    }
    changePage = page =>{
       let pageno;
        if(page===this.state.page){
            pageno=undefined;
        }else if(page!==this.state.page){
            pageno=page;
        }
        let updated_api_url=this.updateApiUrl(pageno);
        this.changeUrlPath(pageno);
        this.fetchApi(updated_api_url,pageno);

    }
    componentDidMount(){
        var qs= window.location.search;
        if(qs===""){
            this.fetchApi(API_BASE_URL);
        }else{
            const url_parse=querystring.parse(qs.substring(1), null, null,null);
            let page=url_parse.page;
            if(page==="1" || page==="2"){
                let updated_api_url =this.updateApiUrl(page);
                this.fetchApi(updated_api_url,page);
            }else{
                this.setState({data:[]});
            }
        }    
    }
    userList = ()=>(
        this.state.data.length!==0?this.state.data.map(user=>{
            // const {email,first_name,last_name,avatar}=user;
            return <div key={user.id} onClick={()=>{this.props.history.push(`/users/${user.id}`)}}>
                <UserCard user={user}/>
            </div>
        }):<div className="reqres-no-data">
        <img className="reqres-no-data-img"  src="./nodata.jpg" alt="nodata"></img>
    </div>
        
    )

    render() {
        return (
            <div className="reqres-buttons-userlist">
                <div className="reqres-buttons">
                    <Button
                        className="button-page"
                        variant={
                          this.state.page === '1'
                            ? "contained"
                            : "outlined"
                        }
                        color="primary"
                        onClick={()=>{this.changePage('1')}}
                    >
                        PAGE-1
                    </Button>
                    <Button
                        className="button-page"
                        variant={
                          this.state.page === '2'
                            ? "contained"
                            : "outlined"
                        }
                        color="primary"
                        onClick={()=>{this.changePage('2')}}
                    >
                        PAGE-2
                    </Button>
                </div>
                <div className="reqres-userlist">
                    <this.userList/>
                </div>
            </div>
        )
    }
}

export default ListUsers
