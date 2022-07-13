import Card from './Card'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Atoms/Card',
  component: Card,
} as Meta

const Template: Story = (args) => <Card {...args} />;


export const Primary = Template.bind({})
Primary.args = {
  children: 'This is an example of text',
}