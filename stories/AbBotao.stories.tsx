import React from "react";
import { AbBotao } from '../src'
import { Meta, StoryFn} from '@storybook/react';


export default {
    title: 'Componentes/AbBotao',
    component: AbBotao
} as Meta<typeof AbBotao>

const Template: StoryFn<typeof AbBotao> = () => <AbBotao/>

export const Primário = Template.bind({});
