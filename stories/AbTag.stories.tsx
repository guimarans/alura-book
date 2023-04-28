import React from 'react';
import { AbTag, AbTagProps } from '../src'
import { Meta, StoryFn} from '@storybook/react';

export default {
    title: 'Componentes/AbTag',
    component: AbTag
} as Meta<typeof AbTag>

const Template: StoryFn<typeof AbTag> = (args) => <AbTag {...args} />

export const Primario = Template.bind({});
Primario.args = {
    texto: 'Tag',
    tipo: 'primario'
} as AbTagProps

export const Secundario = Template.bind({});
Secundario.args = {
    texto: 'Tag',
    tipo: 'secundario'
} as AbTagProps