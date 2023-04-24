import React from "react";
import { AbGrupoOpcoes, AbGrupoOpcoesProps } from '../src'
import { Meta, StoryFn} from '@storybook/react';


export default {
    title: 'Componentes/AbGrupoOpcoes',
    component: AbGrupoOpcoes
} as Meta<typeof AbGrupoOpcoes>

const Template: StoryFn<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes {...args} />

export const Padrão = Template.bind({});
Padrão.args = {
    opcoes: [
        {
            id: 1,
            titulo: 'E-book',
            corpo: '00,00',
            rodape: '.pdf, .epub, .mob'
        },
        {
            id: 2,
            titulo: 'Impresso',
            corpo: '00,00',
            rodape: '.pdf, .epub, .mob'
        },
        {
            id: 3,
            titulo: 'Impresso + E-book',
            corpo: '00,00',
            rodape: '.pdf, .epub, .mob'
        }
    ]
} as AbGrupoOpcoesProps;