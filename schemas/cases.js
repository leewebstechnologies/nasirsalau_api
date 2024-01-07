export default {
  name: 'cases',
  title: 'Cases',
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
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
  ],
}
