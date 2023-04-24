import React from "react";
import { AbCampoTexto, AbCampoTextoProps } from '../src'
import { Meta, StoryFn} from '@storybook/react';


export default {
    title: 'Componentes/AbCampoTexto',
    component: AbCampoTexto,
    argTypes: {
        label: {
            control: 'text'
        }
    },
    parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta<typeof AbCampoTexto>

const Template: StoryFn<typeof AbCampoTexto> = (args) => <AbCampoTexto {...args}/>

export const Padrão = Template.bind({})
Padrão.args = {
    label: 'Uma label interessante',
} as AbCampoTextoProps