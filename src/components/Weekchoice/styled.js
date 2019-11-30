import styled from "styled-components";

export const ListContainer = styled.div`
    padding:0 .4rem;
    .week_list{
        width:100%;
        padding-top:.6rem;
        background-color:#fff;
        p{
            color:#ff3939;
        }
        
    }
    .week_list_item{
        div{
            padding:.4rem 0;
        }
        img{
            width:100%;
            height:4.46rem;
        }
        p:nth-child(2){
            margin-top: .3rem;
            font-size: .3rem;
            color: #2c3038;
        }
        p:nth-child(3){
            margin-top: .16rem;
            font-size: .22rem;
            color: #92969c;
        }
    }

`