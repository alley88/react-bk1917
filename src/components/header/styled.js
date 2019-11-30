import styled from "styled-components";

export const HeaderContainer = styled.div`
    width:100%;
    height:.88rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
    background-color:#000;
    font-size:.3rem;
    color:#fff;
    z-index:2;
    .header_l{
        padding-left:.2rem;
    }
    .header_c{
        position:absolute;
        left:50%;
        margin-left:-68px;
    }
    .header_r{
        width:2.3rem;
        color:#fff;
        div:nth-child(1){
            height: 88px;
            font-size: 30px;
          
            text-align: center;
            line-height: 88px;
            padding: 0 30px;
            float:left;
        }
        div:nth-child(2){
            float:right;
        }
        div:nth-child(2) i{
            font-size:.4rem;
            padding:0 .3rem 0 .2rem;
            font-weight:900;
            line-height:.88rem;
        }
    }
`