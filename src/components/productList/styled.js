import styled from "styled-components";

export const ProductListContainer = styled.div`
    &>div{
        width:100%;
        height:2.9rem;
        padding:.3rem;
        display:flex;
        justify-content:space-between;
        border-bottom:1px solid #ccc;
    }
    .list_pic{
        width:3.45rem;
        height:2.3rem;
        flex-shrink:0;
        margin-right:.2rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .list_desc{
        font-size:.3rem;
        color:#2c3038;
        div:nth-child(1){
            margin-bottom:.2rem;
        }
        .price{
            color:#ff3939;
        }
    }
`