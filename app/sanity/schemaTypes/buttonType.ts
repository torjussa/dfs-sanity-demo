import {defineField, defineType} from 'sanity'

export const buttonType = defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'url',
      title: 'External URL',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({allowRelative: false, scheme: ['http', 'https']}),
    }),
  ],
  preview: {
    select: {title: 'text'},
  },
})
