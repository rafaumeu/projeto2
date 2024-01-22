import LogoLink from '.'

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: '',
    link: 'http://localhost',
  },
}

export let ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  )
}

export let TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  )
}

TextOnly.args = {
  srcImg: '',
}
