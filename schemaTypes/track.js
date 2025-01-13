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
      name: 'fileId',
      type: 'string',
      title: 'Google Drive File ID',
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
