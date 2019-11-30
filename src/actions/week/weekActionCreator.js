import {weekAsyncType} from "./weekActionTypes";
import {week_choiceApi} from "api/hub";


export const weekAsyncAction = (cityId,page)=>{
    let weekAction = (data)=>({
        type:weekAsyncType,
        data
    })
   
    return async (dispatch)=>{
        
        let data = await week_choiceApi(140,0)
        dispatch(weekAction(data))
    }
}
