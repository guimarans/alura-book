import React from 'react';
import { Card } from '../src'
import { Meta, StoryFn} from '@storybook/react';

export default {
    title: 'Componentes/Card',
    component: Card
} as Meta<typeof Card>

const Template: StoryFn<typeof Card> = () => <Card children={undefined}/>

export const Primário = Template.bind({});