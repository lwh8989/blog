module.exports = {
    title: ' ',
    description: 'Lee Wonho DevSigner Blog',
    base: '/blog/',
    themeConfig: {
        logo: '/images/logo-120.png',
        nav: [
            { text: 'Markup', link: '/markup/' }, // html, css, layout, ui, bem 및 클래스 방법론, gulp 방법론
            { text: 'Template', link: '/develop/' }, // nunkucks
            { text: 'Interaction', link: '/interaction/' }, //framer
            { text: 'Animation', link: '/animation/' }, // lottie
            { text: 'Design', link: '/design/' } // design
        ],
        // sidebar: 'auto',
        sidebar: {
            '/markup/': [
                '',
                'display',
                'html',
                'css',
                'bem',
                'gulp',
            ],
        },
        lastUpdated: 'Last Updated', // string | boolean
        //displayAllHeaders: true, // Default: false
        smoothScroll: true
    }
}
