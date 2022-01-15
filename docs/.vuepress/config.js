module.exports = {
    // site config
    lang: 'en-US',
    title: 'Hello, VuePress!',
    description: 'This is my first VuePress site',

  // when using vuepress-vite package, you can omit this field
  // because vite is the default bundler
  bundler: '@vuepress/bundler-vite',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
    },
  }