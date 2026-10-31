import { defineDesktopConfig } from '@owdproject/nuxt'

export default defineDesktopConfig({
  theme: '@owdproject/nuxt-theme-paper',
  apps: ['@owdproject/nuxt-app-wasmboy'],
  systemBar: {
    enabled: true,
    startButton: true,
  },
  about: {
    title: 'WasmBoy (playground)',
    subtitle: 'app-wasmboy · theme-paper',
    href: 'https://github.com/owdproject/nuxt-app-wasmboy',
    versionText: 'Nuxt Desktop',
    icons: [
      {
        title: 'Open Web Desktop',
        name: 'mdi:hexagon-multiple-outline',
        size: 24,
      },
      {
        title: 'Nuxt.js',
        name: 'simple-icons:nuxt',
        size: 25,
        style: 'margin-top: -1px',
      },
    ],
  },
})
