import {ComposeIcon, ImageIcon, MenuIcon, ThListIcon} from '@sanity/icons'
import {Disc} from 'lucide-react'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const recordType = defineType({
  name: 'record',
  title: 'Record',
  type: 'document',
  icon: Disc,
  fieldsets: [
    {
      name: 'rating',
      title: 'Rating',
      description:
        'Disse feltene oppdateres basert på brukerinteraksjon på nettsiden',
      options: {columns: 2},
    },
  ],
  groups: [
    {
      name: 'details',
      title: 'Details',
      icon: ThListIcon,
    },
    {
      name: 'editorial',
      title: 'Editorial',
      icon: ComposeIcon,
    },
    {
      name: 'tracks',
      title: 'Tracks',
      icon: MenuIcon,
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      group: 'details',
    }),
    defineField({
      name: 'likes',
      type: 'number',
      readOnly: true,
      fieldset: 'rating',
    }),
    defineField({
      name: 'dislikes',
      type: 'number',
      readOnly: true,
      fieldset: 'rating',
    }),
    defineField({
      name: 'artist',
      title: 'Forfatter',
      type: 'reference',
      to: [{type: 'artist'}],
      group: 'details',
    }),
    defineField({
      name: 'genres',
      title: 'Tags',
      description: 'Relevante tags for artikkelen',
      type: 'array',
      of: [{type: 'reference', to: {type: 'genre'}}],
      group: 'details',
    }),
    defineField({
      name: 'content',
      title: 'Innhold',
      type: 'array',
      of: [
        defineArrayMember({type: 'block'}),
        defineArrayMember({type: 'image', icon: ImageIcon}),
        defineArrayMember({type: 'button'}),
      ],
      group: 'editorial',
    }),
    defineField({
      name: 'image',
      title: 'Bilde',
      type: 'image',
      options: {hotspot: true},
      group: 'editorial',
      fields: [defineField({name: 'alt', description: 'Her kan vi bruke AI funksjoner til å generere en beskrivelse av bildet', type: 'string'})],
    }),
    defineField({
      name: 'tracks',
      title: 'Sanger (eksempel)',
      description: 'Man kan lage alle mulige komponenter for å legge til andre innholdstyper.',
      type: 'array',
      of: [{type: 'track'}],
      group: 'tracks',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      artist: 'artist.name',
      media: 'image',
    },
    prepare({title, artist, media}) {
      return {
        title,
        subtitle: artist,
        media,
      }
    },
  },
})
