import React, { Component } from 'react'
import {HeaderContainer} from "./styled"
import logo from "static/logo.png"
import PropTypes from "prop-types"
import {withRouter} from "react-router-dom";
@withRouter
 class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                    <div className="header_l" onClick={this.handleTo.bind(this)}>{this.props.title}</div>
                    <div className="header_c">
                        <img src={logo}/>
                    </div>
                    <div className="header_r">
                        <div>登陆</div>
                        <div>
                            <i className="iconfont">&#xe62a;</i>
                        </div>
                    </div>
            </HeaderContainer>
        )
    }
    handleTo(){
        if(this.props.title == "分类"){
            this.props.history.push("/category")
        }else{
            this.props.history.push("/home")
        }
    }
}

Header.defaultProps = {
    title:"分类"
}

Header.propTypes = {
    title:PropTypes.string
}

export default Header;