module.exports = {
    title: 'DevSigner',
    description: 'Lee Wonho DevSigner Blog',
    base: '/blog/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Develop',
                ariaLabel: 'Develop Menu',
                items: [
                  { text: 'UI Develop', link: '/develop/ui/' },
                  { text: 'Javascript', link: '/develop/javascript/' },
                  { text: 'Git', link: '/develop/git/' },
                  { text: 'Nunjucks', link: '/develop/nunjucks/' }
                ]
            },
            {
                text: 'Design',
                ariaLabel: 'Design Menu',
                items: [
                  { text: 'Design', link: '/design/design/' },
                  { text: 'Framer', link: '/design/framer/' },
                  { text: 'Lottie', link: '/design/lottie/' }
                ]
            },
            { text: 'Book', link: '/book/' },
            { text: 'Hobby', link: '/hobby/' }
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