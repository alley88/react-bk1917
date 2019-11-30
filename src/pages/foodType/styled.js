import styled from "styled-components";

export const NavTabar = styled.div`
    height:.79rem;
    display:flex;
    position:relative;
    width:100%;
    justify-content:space-between;
    border-bottom:1px solid #ccc;
    div{
        width:100%;
        height:100%;
        text-align:center;
        line-height:.79rem;
        font-size:.3rem;
        background:#fff;
    }

    div:nth-child(1){
        border-right:1px solid #ccc;
        
    }
    ul{
        display:${props=>props.isSwitch?'block':'none'};
        position:absolute;
        left:0;
        top:.79rem;
        width:100%;
        z-index:5;
        background:#fff;
        li{
            width:100%;
            height:.8rem;
            text-align:center;
            line-height:.8rem;
            border-top:1px solid #ccc;
        }
    }

`