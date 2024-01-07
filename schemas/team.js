export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'imageUrl',
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
      name: 'specialisation',
      title: 'Specialisation',
      type: 'string',
    },
  ],
}
