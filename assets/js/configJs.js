System.config({
    map:    {
        app: 'app',
        angular2: 'node_mudules/angular2',
        rxjs: 'node_modules/rxjs'
    },
    packages: {
        app: {
            format: 'register',
            main: 'main.js',
            defaultExtension: 'js'
        },
        angular2:   {
            defaultExtension: 'js'
        },
        rxjs:   {
            defaultExtension: 'js'
        }
    }
});
System.import('main')
    .then(null, console.error.bind(console));