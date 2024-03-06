self.__BUILD_MANIFEST = function (s, a) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        '/': [
            'static/chunks/c16184b3-64cf1234ee41dc24.js',
            'static/chunks/75fc9c18-40134325ca6388e2.js',
            s,
            'static/chunks/320-a0c98b7dcebb418d.js',
            'static/chunks/339-7eced1c292b785dd.js',
            a,
            'static/chunks/pages/index-77c03f089f25b02d.js'
        ],
        '/_error': ['static/chunks/pages/_error-7908298bc3160867.js'],
        '/about': [
            s,
            a,
            'static/chunks/pages/about-4874111b021f3bac.js'
        ],
        '/preview': [
            s,
            a,
            'static/chunks/pages/preview-d9b2116baa6e31ba.js'
        ],
        '/share': [
            s,
            a,
            'static/chunks/pages/share-1cc3c369a9a66fad.js'
        ],
        sortedPages: [
            '/',
            '/_app',
            '/_error',
            '/about',
            '/preview',
            '/share'
        ]
    };
}('static/chunks/420-a364527be043a9ab.js', 'static/css/23e054799aa89f3a.css');
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
