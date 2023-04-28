import React from "react";
import styled from "styled-components";

export interface AbTagProps {
    texto?: string
    tipo?: 'primario' | 'secundario'
}

const TagStyled = styled.div<AbTagProps>`
    padding: ${(props: AbTagProps) => props.tipo === 'secundario' ? '8px 24px' : '24px 32px'};
    color: #FFFFFF;
    background: ${(props: AbTagProps) => props.tipo === 'secundario' ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#EB9B00'};
    font-weight: 700;
    font-size: ${(props: AbTagProps) => props.tipo === 'secundario' ? '16px' : '24px'};
    display: inline-block;
    font-family: sans-serif;
`;

export const AbTag = ({texto, tipo = 'primario'}: AbTagProps) => {
    return (
        <TagStyled tipo={tipo}> { texto } </TagStyled>
    );
}