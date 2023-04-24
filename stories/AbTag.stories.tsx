import React from 'react';
import { AbTag, AbTagProps } from '../src'
import { Meta, StoryFn} from '@storybook/react';

export default {
    title: 'Componentes/AbTag',
    component: AbTag
} as Meta<typeof AbTag>

const Template: StoryFn<typeof AbTag> = (args) => <AbTag {...args} />

export const Padrão = Template.bind({});
Padrão.args = {
    texto: 'Tag'
} as AbTagProps