import SectionBackground from '.'
import SectionContainer from '../SectionContainer'

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <SectionContainer>
        <div>
          <h1>SectionContainer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quod
            vitae mollitia animi quidem. Exercitationem in qui commodi minima
            dolores maiores earum, cum, sit architecto iure tempore nostrum
            velit sapiente.
          </p>
        </div>
      </SectionContainer>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
}

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  )
}
