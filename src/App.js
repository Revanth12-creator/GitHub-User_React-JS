import React, { Component ,Fragment } from 'react';
import axios from "axios";
import "./App.css";
import Spinner from "./lodingComponent.jsx";

class App extends Component {
    constructor(){
        super()
        this.state={
            items:[],
            Loading:false,
        }
    }
    async componentDidMount(){
        let githubuser_API= await axios.get("https://api.github.com/users");
        this.setState({
            items:githubuser_API.data , Loading:true
        })
        console.log(this.state.items)
    }
    render() {
        let {items,Loading}=this.state;
        let Responce=this.state.items.map((user) =>{
            return(
                <Fragment>
                  
                    <div className="card"> 
                        <img src={user.avatar_url} alt={user.login} />
                        <div className="card-body">
                            <h1>{user.login}</h1>
                        </div>
                    </div>
                  
                </Fragment>
            )
        })
        return (
        <Fragment>
            <h2 className="title">Github Users</h2>
           <div className="bodyBlock">
           {/* <Spinner/> */}
               {this.state.items ? Responce : "Loading"}
           </div>
        </Fragment>      
        )
    }
}
export default App;