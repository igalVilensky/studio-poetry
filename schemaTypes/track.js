// schemaTypes/track.js
import {defineField, defineType} from 'sanity'

export const trackType = defineType({
  name: 'track',
  type: 'document',
  title: 'Track',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'audioFile',
      type: 'file',
      title: 'Audio File',
      options: {
        accept: 'audio/mpeg', // Only allow MP3 files
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
      options: {
        hotspot: true, // Enable image cropping
      },
    }),
  ],
})
