import React, { Component } from 'react'
import { ProductListContainer } from "./styled"
import BscrollCom from "common/bscroll"
export default class ProductList extends Component {
    render() {
        let { product_list } = this.props;
        return (
            <BscrollCom>
            <ProductListContainer>
                {
                    product_list.map((item) => (
                        <div key={item.merchant_id}>
                            <div className="list_pic">
                                <img src={item.product_image} />
                            </div>
                            <div className="list_desc">
                                <div>{item.short_name}</div>
                                <div className="price">{item.price/100}元/{item.show_entity_name}</div>
                            </div>
                        </div>
                    ))
                }

            </ProductListContainer>
            </BscrollCom>
        )
    }
}
