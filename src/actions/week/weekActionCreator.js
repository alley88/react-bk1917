import {weekAsyncType,categoryAsyncType,weekListType} from "./weekActionTypes";
import {week_choiceApi,categoryApi,productlistApi} from "api/hub";
import {createAction} from "redux-actions"

export const weekAsyncAction = (cityId,page)=>{
    let weekAction = createAction(weekAsyncType,(data)=>data)
   
    return async (dispatch)=>{
        
        let data = await week_choiceApi(cityId,page)
        dispatch(weekAction(data))
    }
}


export const categoryAsyncAction = (cityId)=>{
    let categoryAction = createAction(categoryAsyncType,(data)=>data)
   
    return async (dispatch)=>{
        
        let data = await categoryApi(cityId)
        dispatch(categoryAction(data));
        localStorage.setItem("category",JSON.stringify(data))
    }
}


export const productListAction = (id,sort,cityId,page)=>{
    let ListAction = createAction(weekListType,(data)=>data)
    return async (dispatch)=>{
        let data = await productlistApi(id,sort,cityId,page);
        dispatch(ListAction(data))
    }
}



/*
    createAction 
        参数1：type类型
        参数2:函数  函数必须返回一个值

*/