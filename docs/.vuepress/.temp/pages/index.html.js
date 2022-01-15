export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Hello VuePress",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroText": "Springfield Dim Sum",
    "heroImage": "/img/springfield-dim-sum-800px.png",
    "tagline": "Healthy, Delicious Dim Sum 7 Days a Week!",
    "actions": [
      {
        "text": "Get Started",
        "link": "/menu.md/",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "Parking",
        "details": "Plenty of free parking at night and free validation during the busin."
      },
      {
        "title": "Parking",
        "details": "Plenty of free parking at night and free validation during the busin."
      },
      {
        "title": "Parking",
        "details": "Plenty of free parking at night and free validation during the busin."
      }
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
