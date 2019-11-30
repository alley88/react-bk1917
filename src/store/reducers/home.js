import { handleActions } from "redux-actions"
import { weekAsyncType,categoryAsyncType,weekListType } from "actions/week/weekActionTypes"
const defaultState = {
    week_choice: [],
    category:[],
    product_list:[]
}

export default handleActions({
    [weekAsyncType]: (state, action) => {
        let weekState = JSON.parse(JSON.stringify(state));
        weekState.week_choice = [...weekState.week_choice,...action.payload];
        return weekState;
    },
    [categoryAsyncType]:(state,action)=>{
        let categoryState = JSON.parse(JSON.stringify(state));
        categoryState.category = action.payload;
        return categoryState;
    },
    [weekListType]:(state,action)=>{
        let listState = JSON.parse(JSON.stringify(state));
        listState.product_list = action.payload;
        return listState;
    }
}, defaultState)

