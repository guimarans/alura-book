import React, { useState } from "react";
import styled from "styled-components";

const AbRadioLabelEstilo = styled.label`
    color: #002F52;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-right: 7px;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
`;

const AbRadioButtonEstilo = styled.input`
    margin: 0;
    visibility: hidden;

    &:checked {
        & + span {
            border: 2px solid #002F52;

            &::after {
                opacity: 1;
            }
        }
    }
`;

const AbCustomRadio = styled.span `
    left: -8px;
    top: 6px;
    cursor: pointer;
    width: 16px;
    height: 16px;
    border: 2px solid #002F52;
    border-radius: 50%;
    display: inline-block;
    position: relative;

    &::after {
        content: '';
        width: 10px;
        height: 10px;
        background: #002F52;
        position: absolute;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 0.2s;
    }
`

export interface AbRadioButtonOpcao {
    id: string,
    name: string,
    label: string,
    value: string,
}

export interface AbRadioButtonOpcaoProps {
    opcoes: AbRadioButtonOpcao[]
    onChange: (opcao: AbRadioButtonOpcao) => void
}

export const AbRadioButtonOpcao = ({ opcoes, onChange }: AbRadioButtonOpcaoProps) => {

    const [selecao, setSelecao] = useState<AbRadioButtonOpcao>()

    const aoSelecionar = (opcao: AbRadioButtonOpcao): void => {
        setSelecao(opcao);

        if (onChange) {
            onChange(opcao)
        }
    }

    return (
        <>
            {opcoes.map(opcao =>
                <AbRadioLabelEstilo htmlFor={opcao.id}>
                    <AbRadioButtonEstilo
                        name={opcao.name}
                        id={opcao.id}
                        value={opcao.value}
                        onClick={() => aoSelecionar(opcao)}
                        type="radio"
                    />
                    <AbCustomRadio />
                    {opcao.label}
                </AbRadioLabelEstilo>
            )}
        </>
    );
}