import {visionTool} from '@sanity/vision'
import {googleMapsInput} from '@sanity/google-maps-input'
import {defineConfig, isDev} from 'sanity'
import {presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'

import {STUDIO_BASEPATH} from '~/sanity/constants'
import {resolve} from '~/sanity/presentation/resolve'
import {projectDetails} from '~/sanity/projectDetails'
import schema from '~/sanity/schemaTypes'
import {defaultDocumentNode, structure} from '~/sanity/structure'

const devOnlyPlugins = [visionTool({title: 'data'})]


export default defineConfig({
  ...projectDetails(),
  name: 'dfs-demo',
  title: 'DFS demo',
  releases: {enabled: true},
  plugins: [
    structureTool({title: 'Innhold', structure, defaultDocumentNode}),
    googleMapsInput({
        apiKey: "process.env.GOOGLE_MAPS_API_KEY",
    }),
    presentationTool({
      title: 'Forhåndsvisning',
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/resource/preview',
        },
      },
    }),
    ...(isDev ? devOnlyPlugins : []),
  ],
  basePath: STUDIO_BASEPATH,
  schema: {
    types: schema,
  },
})
