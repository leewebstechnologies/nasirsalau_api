export default {
  name: 'practices',
  title: 'Practices',
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
  ],
}
