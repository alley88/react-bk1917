import { handleActions } from "redux-actions"
import { weekAsyncType } from "actions/week/weekActionTypes"
const defaultState = {
    week_choice: []
}

export default handleActions({
    [weekAsyncType]: (state, action) => {
        let weekState = JSON.parse(JSON.stringify(state));
        weekState.week_choice = action.data;
        return weekState;
    }
}, defaultState)

