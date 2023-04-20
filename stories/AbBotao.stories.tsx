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
} as AbBotaoProps;

export const Secundário = Template.bind({});
Secundário.args = {
    texto: 'Botão secundário',
    tipo: 'secundario',
} as AbBotaoProps;
