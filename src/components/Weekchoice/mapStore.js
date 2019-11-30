import {weekAsyncAction} from "actions/week/weekActionCreator"

export const mapStateToProps = (state)=>({
    week_choice:state.home.week_choice
})

export const mapDispatchToProps = (dispatch)=>({
    handleWeekAsyncData(){
        dispatch(weekAsyncAction())
    }
})