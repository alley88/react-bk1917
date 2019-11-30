import {categoryAsyncAction} from "actions/week/weekActionCreator"
export const mapStateToProps = (state)=>({
    cityId:state.user.cityId,
    category:JSON.parse(localStorage.getItem("category"))  || state.home.category
})


export const mapDispatchToProps = (dispatch)=>({
    handleAsynccategory(cityId){
        dispatch(categoryAsyncAction(cityId))
    }
})