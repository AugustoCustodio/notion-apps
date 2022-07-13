import Text from './Text'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Atoms/Text',
  component: Text,
} as Meta

const Template: Story = (args) => <Text {...args} />;


export const Primary = Template.bind({})
Primary.args = {
  children: 'This is an example of text',
}