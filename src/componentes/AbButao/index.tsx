import React from "react";
import styled from "styled-components";

const BotaoEstilizado = styled.button`
    background: #EB9B00;
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: #FFF;
    font-size: 20px;
    cursor: point;&:hover {
        background: #BB7900;
        border: 2px solid #BB7900;
    }
`

export const AbBotao = () => {
    return (
        <BotaoEstilizado> Clique aqui! </BotaoEstilizado>
    )
}