import React from "react";
import { AbBotao, AbBotaoProps } from '../src'
import { Meta, StoryFn} from '@storybook/react';


export default {
    title: 'Componentes/AbBotao',
    component: AbBotao
} as Meta<typeof AbBotao>

const Template: StoryFn<typeof AbBotao> = (args) => <AbBotao {...args}/>

export const Primário = Template.bind({});
Primário.args = {
    texto: 'Botão primário',
    tipo: 'primario',
    tamanho: 'pequeno'
} as AbBotaoProps;

Primário.args = {
    texto: 'Botão primário',
    tipo: 'primario',
    tamanho: 'grande'
} as AbBotaoProps;

export const Secundário = Template.bind({});
Secundário.args = {
    texto: 'Botão secundário',
    tipo: 'secundario',
    tamanho: 'pequeno'
} as AbBotaoProps;

Secundário.args = {
    texto: 'Botão secundário',
    tipo: 'secundario',
    tamanho: 'grande'
} as AbBotaoProps;

