import React from 'react';
import { AbCard } from '../src'
import { Meta, StoryFn} from '@storybook/react';

export default {
    title: 'Componentes/AbCard',
    component: AbCard
} as Meta<typeof AbCard>

const Template: StoryFn<typeof AbCard> = () => <AbCard children={undefined}/>

export const Simples = Template.bind({});