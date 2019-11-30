import React, { Component } from 'react'
import Header from "components/header"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { CategoryContainer } from "./styled"
import { Link } from "react-router-dom";



@connect(mapStateToProps, mapDispatchToProps)
class Category extends Component {
    render() {
        let { category, cityId } = this.props;
        return (
            <div>
                <Header title="首页" />
                <CategoryContainer>
                    {
                        category.map((item, index) => (
                            <div className="food_type" key={index}>
                                <div>{item.name}</div>
                                <ul>
                                    {
                                        item.sub_category_list.map((child, idx) => (
                                            <li key={idx}>
                                                <Link to={'/foodType/' +(child.sub_category_list ? child.sub_category_list[0].id : '')+ '/' + cityId}> {child.name}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </CategoryContainer>
            </div>
        )
    }
    componentDidMount() {
        if (!localStorage.getItem("category")) {
            this.props.handleAsynccategory(this.props.cityId);
        }
    }
}

export default Category;