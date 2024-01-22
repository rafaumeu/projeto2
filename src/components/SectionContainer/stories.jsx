import SectionContainer from '.'

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quod
          vitae mollitia animi quidem. Exercitationem in qui commodi minima
          dolores maiores earum, cum, sit architecto iure tempore nostrum velit
          sapiente.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
}

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  )
}
