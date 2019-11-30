import styled from "styled-components";

export const CategoryContainer = styled.div`
    .food_type{
        div{
            background:#f6f6f6;
            padding:18px 40px;
            font-size:.3rem;
            color:#1b1b20
        }
        ul{
            width:100%;
            display:flex;
            flex-wrap:wrap;
           
        }
        li{
            width:33.3%;
            height:.97rem;
            line-height:.97rem;
            text-align:center;
            border-right:1px solid #ccc;
            border-bottom:1px solid #ccc;
            a{
                width:100%;
                height:100%;
                display:block;
            }
        }
    }
`