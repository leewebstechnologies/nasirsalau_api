export default {
  name: 'teams',
  title: 'Teams',
  type: 'document',
  fields: [
    {
      name: 'imgUrl',
      title: 'ImgURL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'specialisation_a',
      title: 'Specialisation_a',
      type: 'string',
    },
    {
      name: 'specialisation_b',
      title: 'Specialisation_b',
      type: 'string',
    },
    {
      name: 'specialisation_c',
      title: 'Specialisation_c',
      type: 'string',
    },
  ],
}
