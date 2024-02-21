import React from 'react'
import text from './text'

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    tex: 'Hello World!'
  }
}

const TextTemplate = (args) => <Text {...args} />

export const Default = TextTemplate.bind({})
export { TextTemplate }
