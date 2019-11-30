import {weekAsyncAction} from "actions/week/weekActionCreator"

export const mapStateToProps = (state)=>({
    week_choice:state.home.week_choice,
    cityId:state.user.cityId
})

export const mapDispatchToProps = (dispatch)=>({
    handleWeekAsyncData(cityId,page){
        dispatch(weekAsyncAction(cityId,page))
    }
})