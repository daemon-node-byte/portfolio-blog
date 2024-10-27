// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head:{
      title: "J.McLain's Portfolio",
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    }
  },
  content: {
    highlight: {
      theme: 'monokai',
      langs: ['javascript', 'typescript', 'json', 'html', 'css', 'scss', 'markdown', 'bash', 'shell', 'yaml', 'xml', 'python', 'java', 'csharp', 'php', 'ruby', 'go', 'rust', 'swift', 'kotlin', 'dart', 'groovy', 'powershell', 'sql', 'c']
    },
    markdown: {
      remarkPlugins: ['remark-gfm'],
      rehypePlugins: [],
      
    }
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "@nuxt/content"],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ["Inter", "sans-serif"],
            serif: ["Merriweather", "serif"],
            mono: ["Fira Code", "monospace"],
            custom: ["Oxanium", "monospace"],
          },
          colors: {
            primary: {
              100: "#e8cef8",
              200: "#d09df1",
              300: "#b96bea",
              400: "#a13ae3",
              500: "#8a09dc",
              600: "#6e07b0",
              700: "#530584",
              800: "#370458",
              900: "#1c022c",
              DEFAULT: "#8a09dc",
            },
            secondary: {
              100: "#ccffcc",
              200: "#99ff99",
              300: "#66ff66",
              400: "#33ff33",
              500: "#00ff00",
              600: "#00cc00",
              700: "#009900",
              800: "#006600",
              900: "#003300",
              DEFAULT: "#00ff00",
            },
            tertiary: {
              100: "#d4ddff",
              200: "#a8bbff",
              300: "#7d9aff",
              400: "#5178ff",
              500: "#2656ff",
              600: "#1e45cc",
              700: "#173499",
              800: "#0f2266",
              900: "#081133",
              DEFAULT: "#2656ff",
            },
            warning: {
              100: "#fefbcc",
              200: "#fdf699",
              300: "#fbf266",
              400: "#faed33",
              500: "#f9e900",
              600: "#c7ba00",
              700: "#958c00",
              800: "#645d00",
              900: "#322f00",
              DEFAULT: "#f9e900",
            },
            danger: {
              100: "#ffcccc",
              200: "#ff9999",
              300: "#ff6666",
              400: "#ff3333",
              500: "#ff0000",
              600: "#cc0000",
              700: "#990000",
              800: "#660000",
              900: "#330000",
              DEFAULT: "#ff0000",
            },
            info: {
              100: "#ccfffd",
              200: "#99fffb",
              300: "#66fef8",
              400: "#33fef6",
              500: "#00fef4",
              600: "#00cbc3",
              700: "#009892",
              800: "#006662",
              900: "#003331",
              DEFAULT: "#00fef4",
            },
            accent: {
              100: "#efe7ff",
              200: "#dfcffe",
              300: "#cfb6fe",
              400: "#bf9efd",
              500: "#af86fd",
              600: "#8c6bca",
              700: "#695098",
              800: "#463665",
              900: "#231b33",
              DEFAULT: "#af86fd",
            },
          },
        },
      },
    },
  },
});