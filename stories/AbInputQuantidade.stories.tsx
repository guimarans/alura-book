import React from "react";
import { AbInputQuantidade, AbInputQuantidadeProps,  } from '../src'
import { Meta, StoryFn} from '@storybook/react';


export default {
    title: 'Componentes/AbInputQuantidade, ',
    component: AbInputQuantidade,
    parameters: {
        action: {
            argTypesRegex: '^on.*'
        }
    }
} as Meta<typeof AbInputQuantidade>

const Template: StoryFn<typeof AbInputQuantidade> = (args) => <AbInputQuantidade {...args}/>

export const AbInputQuantidadeComponent = Template.bind({});
AbInputQuantidadeComponent.args = {
    label: 'Uma label interessante'
} as AbInputQuantidadeProps;