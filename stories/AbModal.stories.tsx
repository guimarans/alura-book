import React from "react";
import { AbBotao, AbCampoTexto, AbModal, AbModalProps } from '../src'
import { Meta, StoryFn} from '@storybook/react';


export default {
    title: 'Componentes/AbModal',
    component: AbModal
} as Meta<typeof AbModal>

const Template: StoryFn<typeof AbModal> = (args) => <AbModal {...args}/>

export const Primário = Template.bind({});
Primário.args = {
    titulo: 'LOGIN',
    aberta: true,
    children: 
        <>
            <AbCampoTexto 
                label={"E-mail"} 
                value={"teste@teste.com.br"} 
                onChange={(value: string): void =>  {
                    throw new Error("Function not implemented.");
                }}
            />

            <AbCampoTexto 
                label={"Senha"} 
                value={"teste"} 
                type={"password"}
                onChange={(value: string): void =>  {
                    throw new Error("Function not implemented.");
                }}
            />
        
            <div>
                <a> Esqueci minha senha </a>
                <AbBotao 
                    texto={'Fazer login'}
                    tipo={'primario'}
                    tamanho={'pequeno'} 
                />
            </div>
        </>,
} as AbModalProps;