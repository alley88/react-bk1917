import React, { Component } from 'react'
import {TabBarRoute} from "router"
import {TabBarContainer} from "./styled"
import {withRouter} from "react-router-dom"
@withRouter
class TabBar extends Component {
    constructor(){
        super()

        this.state = {
            activePath:"/home"
        }
    }
    render() {
        let {activePath} = this.state;
        return (
            <TabBarContainer>
                <ul>
                    {
                       TabBarRoute.map((item)=>(
                           <li key={item.path} onClick={this.handleTo.bind(this,item.path)}>
                                <i className="iconfont">{item.icon}</i>
                                <span>{item.text}</span>
                           </li>
                       )) 
                    }
                </ul>
            </TabBarContainer>
        )
    }
    handleTo(path){
        this.props.history.push(path);
        this.setState({
            activePath:path 
        })
    }
}

export default TabBar;
