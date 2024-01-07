export default {
  name: 'practice',
  title: 'Practice',
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
  ],
}
