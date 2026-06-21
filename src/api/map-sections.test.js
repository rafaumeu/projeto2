import pageFakeData from './dados.json'
import {
  mapImageGrid,
  mapSectionContent,
  mapSectionTwoColumns,
  mapSections,
  mapTextGrid,
} from './map-sections'
describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections()
    expect(data).toEqual([])
  })
  it('should render sections with correct data', () => {
    const data = mapSections(pageFakeData[0].sections)
    expect(data[0].component).toBe('section.section-two-columns')
  })
  it('should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ])
    const withNoComponent = mapSections([{}])
    expect(withNoTextOrImageGrid).toEqual([
      {
        __component: 'section.section-grid',
      },
    ])
    expect(withNoComponent).toEqual([{}])
  })
  it('should test section.section-grid with no text_grid or image_grid', () => {
    const withNoTextGridOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
    ])
    expect(withNoTextGridOrImageGrid.length).toBe(2)
  })
  it('should map section two columns', () => {
    const data = mapSectionTwoColumns()
    expect(data.background).toBe(false)
    expect(data.component).toBe('')
    expect(data.sectionId).toBe('')
    expect(data.srcImg).toBe('')
    expect(data.text).toBe('')
    expect(data.title).toBe('')
  })
  it('should map section two columns', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',

      title: 'January brings us Firefox 85',
      description:
        'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.',
      metadata: {
        background: true,
        section_id: 'home',
      },

      image: {
        url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749289/javascript_b57bf48cda.svg',
      },
    })
    expect(data.background).toBe(true)
    expect(data.component).toBe('section.section-two-columns')
    expect(data.sectionId).toBe('home')
    expect(data.srcImg).toBe(
      'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749289/javascript_b57bf48cda.svg'
    )
    expect(data.text).toBe(
      'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.'
    )
    expect(data.title).toBe('January brings us Firefox 85')
  })
  it('should map section content with no data', () => {
    const data = mapSectionContent()

    expect(data.background).toBe(false)
    expect(data.component).toBe('')
    expect(data.sectionId).toBe('')
    expect(data.html).toBe('')
    expect(data.title).toBe('')
  })
  it('should map section content with no data', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',

      title: 'news coverage and some surprises',
      content: '<p>Content</p>',
      metadata: {
        background: false,
        section_id: 'intro',
      },
    })

    expect(data.background).toBe(false)
    expect(data.component).toBe('section.section-content')
    expect(data.sectionId).toBe('intro')
    expect(data.html).toBe('<p>Content</p>')
    expect(data.title).toBe('news coverage and some surprises')
  })
  it('should map grid text with data', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',

      description: 'abc',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'abc',
        },
        {
          title: 'Teste 2',
          description: 'abc',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        name: 'grid-one',
        section_id: 'grid-one',
      },
    })

    expect(data.background).toBe(true)
    expect(data.component).toBe('section.section-grid-text')
    expect(data.sectionId).toBe('grid-one')
    expect(data.description).toBe('abc')
    expect(data.title).toBe('My Grid')
    expect(data.grid[0].title).toBe('Teste 1')
    expect(data.grid[0].description).toBe('abc')
  })
  it('should map grid text with out data', () => {
    const data = mapTextGrid(undefined)

    expect(data.background).toBe(false)
    expect(data.component).toBe('section.section-grid-text')
    expect(data.sectionId).toBe('')
    expect(data.description).toBe('')
    expect(data.title).toBe('')
  })
  it('should map grid image with out data', () => {
    const data = mapImageGrid(undefined)

    expect(data.background).toBe(false)
    expect(data.component).toBe('section.section-grid-image')
    expect(data.sectionId).toBe('')
    expect(data.description).toBe('')
    expect(data.title).toBe('')
  })
  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',

      description: 'abc',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'abc',

            url: 'a.jpg',
          },
        },
      ],
      metadata: {
        background: false,
        _id: '602fdf2e540c00269e0561a4',
        name: 'gallery',
        section_id: 'gallery',
        __v: 0,
        id: '602fdf2e540c00269e0561a4',
      },
      __v: 2,
      id: '602fdf2d540c00269e056175',
    })

    expect(data.background).toBe(false)
    expect(data.component).toBe('section.section-grid-image')
    expect(data.sectionId).toBe('gallery')
    expect(data.description).toBe('abc')
    expect(data.title).toBe('Gallery')
    expect(data.grid[0].srcImg).toBe('a.jpg')
    expect(data.grid[0].altText).toBe('abc')
  })
})
