import React, { Component } from 'react'
import {PageContainer} from "common/styled"
import Header from "components/header"
import Weekchoice from "components/Weekchoice"
export default class Home extends Component {
    render() {
        return (
            <PageContainer>
                <Header/>
                <Weekchoice/>
            </PageContainer>
        )
    }
}
