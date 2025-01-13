// schemaTypes/track.js
export default {
  name: 'track',
  type: 'document',
  title: 'Track',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'audioFile',
      type: 'file',
      title: 'Audio File',
      options: {
        accept: 'audio/mpeg', // Only allow MP3 files
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
      options: {
        hotspot: true, // Enable image cropping
      },
    },
  ],
}
