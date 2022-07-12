import Button from './Button'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Atoms/Button',
  component: Button
} as Meta

const Template: Story = (args) => <Button {...args} />;


export const Primary = Template.bind({})
Primary.args = {
  children: 'Text Button',
  color: 'primary',
  size: 'medium',
  border: 1,
  variant: 'contained',
}
export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Text Button',
  color: 'primary',
  size: 'medium',
  variant: 'outlined',
  border: 1
}
