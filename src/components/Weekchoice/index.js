import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { ListContainer } from "./styled"
import Bscroll from "common/bscroll"
@connect(mapStateToProps, mapDispatchToProps)
class Weekchoice extends Component {
    constructor(){
        super();
        this.page = 0;
    }
    render() {
        let { week_choice } = this.props;
        return (
            <Bscroll ref="scroll">
                <ListContainer>
                    {
                        week_choice.map((item, index) => (
                            <div className="week_list" key={index}>
                                <h1>{item.group_section.title}</h1>
                                <p>{item.group_section.desc}</p>
                                <div className="week_list_item">
                                    {
                                        item.tabs.map((child) => (
                                            <div key={child.id}>
                                                <img src={child.url} />
                                                <p>{child.title}</p>
                                                <p>{child.desc}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </ListContainer>
            </Bscroll>
        )
    }
    componentWillUpdate(){
        this.refs.scroll.handlefinishPullUp();
    }
    componentDidMount() {
        this.props.handleWeekAsyncData(this.props.cityId,this.page);
        this.page++;

        this.refs.scroll.handlepullingUp(()=>{
            let cityId = this.props.cityId;
            let page = this.page;
            this.props.handleWeekAsyncData(cityId,page);
            this.page++;
        })
    }
}

export default Weekchoice;