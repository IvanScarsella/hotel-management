import { defineConfig, isDev } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'
// import {getStartedPlugin} from '../cms/plugins/sanity-plugin-tutorial'

// const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'hotel-management',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,

  basePath: '/studio',

  plugins: [
    structureTool(),
    visionTool(),
    //  ...(isDev ? devOnlyPlugins : [])
  ],

  schema: {
    types: schemaTypes,
  },
})
