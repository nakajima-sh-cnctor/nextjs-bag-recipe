/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
// Styles
import { createPinia } from 'pinia'
import vuetify from '../utils/vuetify'

const pinia = createPinia()

setup((app) => {
  if (app) {
    app.use(vuetify).use(pinia)
  }
})

export const decorators = [
  (story: any) => ({
    components: { story },
    template: '<v-container style="display: flex;justify-content: center;"><story /></v-container>',
  }),
]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
