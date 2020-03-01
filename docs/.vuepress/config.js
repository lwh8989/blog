module.exports = {
    title: 'wh blog',
    description: 'fuck you',
    base: '/blog/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Test', link: '/test/' },
            { text: 'External', link: 'https://google.com' },
            { text: 'External', link: 'https://google.com', target:'_self', rel:'' },
            { text: 'Guide', link: '/guide/', target:'_blank' }
        ],
        sidebar: [
            {
                title: 'Group 1',   // required
                path: '/foo/',      // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                '/'
              ]
            },
            {
                title: 'Group 2',
                children: [ /* ... */ ]
            }
        ],
        lastUpdated: 'Last Updated', // string | boolean
        smoothScroll: true
    }
}