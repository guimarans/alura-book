import React from "react";
import styled, { css } from "styled-components";

export interface AbBotaoProps {
    texto?: string,
    tipo?: 'primario' | 'secundario',
    tamanho?: 'pequeno' | 'grande',
    onClick?: () => void
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
    background: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#EB9B00' : '#fff'};
    padding: ${(props: AbBotaoProps) => props.tamanho === 'grande' ? '16px 32px' : '5px 20px'};
    border: 2px solid #EB9B00;
    color: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#FFF' : '#EB9B00'};
    font-size: ${(props: AbBotaoProps) => props.tamanho === 'grande' ? '20px' : '14px'};
    cursor: pointer;
    ${(props: AbBotaoProps) => props.tipo === 'primario' 
        ? css`
            &:hover {
                background: #BB7900;
                border: 2px solid #B87900;
            }
        ` 
        : css`
            &:hover {
                background: #fff;
                border: 2px solid #B87900;
                color: #B87900;
            }
        `
    };
   
`

export const AbBotao = ({texto, tipo = 'primario', tamanho = 'grande', onClick}: AbBotaoProps) => {
    return (
        <BotaoEstilizado onClick={onClick} tipo={tipo} tamanho={tamanho}> 
            {texto}
        </BotaoEstilizado>
    )
}