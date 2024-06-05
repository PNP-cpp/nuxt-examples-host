import federation from '@originjs/vite-plugin-federation';

export default defineNuxtConfig({
  extends: ['@nuxt/examples-ui'],
  vite: {
    plugins: [
      federation({
        name: 'host-app',
        remotes: {
          remote_app:
            'https://nuxtexamplesrtbf9z-oirq--3000--12d46890.local-corp.webcontainer.io/assets/remoteEntry.js',
        },
        shared: ['vue'],
      }),
    ],
  },
});
