import Footer from '.'

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="#target">Feito com ♥️ por Rafael Dias Zendron</a></p>`,
  },
}

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  )
}
