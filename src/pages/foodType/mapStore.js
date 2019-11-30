import {productListAction} from "actions/week/weekActionCreator"
export const mapStateToProps = (state)=>({
    product_list:state.home.product_list
})

export const mapDispatchToProps = (dispatch)=>({
        handleproductList(id,sort,cityId,page){
            dispatch(productListAction(id,sort,cityId,page))
        }
})