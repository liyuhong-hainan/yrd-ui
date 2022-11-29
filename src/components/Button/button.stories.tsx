import React from 'react';
import Button from './button';


import { ComponentMeta, ComponentStory } from '@storybook/react'

const buttonMeta: ComponentMeta<typeof Button> = {
    title: '按钮 Button',
    component: Button
}

export default buttonMeta;

//另一种写法
const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}></Button>
)
export const Default = Template.bind({})
Default.args = {
    children: 'Default Button'
}
Default.storyName = '默认按钮样式'
Default.decorators = [
    (Story) => (
        <div style={{margin: '10px'}}><Story /></div>
    )
]

// 普通写法
export const ButtonWithSize: ComponentStory<typeof Button> = () => (
    <>
        <Button size="lg">large button</Button>
        <Button size="sm">small button</Button>
    </>
)

ButtonWithSize.storyName = '不同尺寸按钮'

// 普通写法
export const ButtonWithType: ComponentStory<typeof Button> = () => (
    <>
        <Button btnType="primary">primary button</Button>
        <Button btnType="danger">danger button</Button>
        <Button btnType="link" href="https://google.com">link button</Button>
    </>
)

ButtonWithType.storyName = '不同类型按钮'