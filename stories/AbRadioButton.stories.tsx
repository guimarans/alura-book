import React from "react";
import { AbRadioButtonOpcao, AbRadioButtonOpcaoProps } from '../src'
import { Meta, StoryFn} from '@storybook/react';


export default {
    title: 'Componentes/AbRadioButtonOpcao',
    component: AbRadioButtonOpcao
} as Meta<typeof AbRadioButtonOpcao>

const Template: StoryFn<typeof AbRadioButtonOpcao> = (args) => <AbRadioButtonOpcao {...args} />

export const Padrão = Template.bind({});
Padrão.args = {
    opcoes: [
        {
            id: 1,
            label: "Paypal",
            name: "pagamento",
            value: "Paypal",
            checked: true
        },
        {
            id: 2,
            label: "PagSeguro",
            name: "pagamento",
            value: "PagSeguro",
            checked: false
        }
    ]
} as unknown as AbRadioButtonOpcaoProps;