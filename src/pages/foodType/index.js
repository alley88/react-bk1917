import React, { Component, Fragment } from 'react'
import Header from "components/header"
import { NavTabar } from "./styled"
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import ProductList from "components/productList"

@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class FoodType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchInit: "智能排序",
            isSwitch: false,
            sort: 1,
            page: 0,
            switchNav: [
                {
                    text:"智能排序",
                    id:1
                 },
                 {
                    text:"离我最近",
                    id:3
                 },
                 {
                    text:"价格最高",
                    id:2
                 },
                 {
                    text:"价格最低",
                    id:4
                 }
            ]
        }

    }
    render() {
        let { switchInit, isSwitch,switchNav } = this.state;
        let { product_list } = this.props;
        return (
            <Fragment>
                <Header title="首页" />
                <NavTabar isSwitch={isSwitch}>
                    <div>全部</div>
                    <div onClick={this.handleToggle.bind(this)}>{switchInit}</div>
                    <ul>
                        {
                            switchNav.map((item)=>(
                                <li key={item.id} onClick={this.handleSwitch.bind(this,item)}>{item.text}</li>
                            ))
                        }
                    </ul>
                </NavTabar>
                <ProductList product_list={product_list} />
            </Fragment>
        )
    }
    componentDidMount() {
       this.handleAsyncList()
    }
    handleAsyncList(){
        let { id, cityId } = this.props.match.params;
        let { sort, page } = this.state;
        this.props.handleproductList(id, sort, cityId, page);
    }
    handleToggle() {
        this.setState({
            isSwitch: !this.state.isSwitch
        })
    }
    handleSwitch(item){
        this.setState({
            switchInit:item.text,
            isSwitch:false,
            sort:item.id
        },()=>{
            this.handleAsyncList();
        })
        

    }
}

export default FoodType;
