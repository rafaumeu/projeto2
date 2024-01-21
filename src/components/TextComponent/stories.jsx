import TextComponent from '.'

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum 
    error neque veniam consectetur placeat? Dolor blanditiis, labore eum odio 
    iste, aliquid ipsum nemo soluta voluptates repellat voluptatum! 
    Voluptatibus, totam ea?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
}

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  )
}
