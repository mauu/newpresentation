// Apply the CLI SystemJS configuration.
System.config({
    map: {
        'rxjs': 'vendor/rxjs',
        'main': 'main.js',
        // Angular specific mappings.
        '@angular/core': 'vendor/@angular/core/bundles/core.umd.js',
        '@angular/core/testing': 'vendor/@angular/core/bundles/core-testing.umd.js',
        '@angular/router': 'vendor/@angular/router/bundles/router.umd.js',
        '@angular/router-testing': 'vendor/@angular/router/bundles/router-testing.umd.js',
        '@angular/common': 'vendor/@angular/common/bundles/common.umd.js',
        '@angular/common/testing': 'vendor/@angular/common/bundles/common-testing.umd.js',
        '@angular/compiler': 'vendor/@angular/compiler/bundles/compiler.umd.js',
        '@angular/compiler/testing': 'vendor/@angular/compiler/bundles/compiler-testing.umd.js',
        '@angular/http': 'vendor/@angular/http/bundles/http.umd.js',
        'tslib': 'vendor/tslib/tslib.js',
        '@angular/common/http': 'vendor/@angular/common/bundles/common-http.umd.js',
        '@angular/http/testing': 'vendor/@angular/http/bundles/http-testing.umd.js',
        '@angular/forms': 'vendor/@angular/forms/bundles/forms.umd.js',
        '@angular/forms/testing': 'vendor/@angular/forms/bundles/forms-testing.umd.js',
        '@angular/platform-browser': 'vendor/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser/testing': 'vendor/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
        '@angular/platform-browser-dynamic': 'vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/platform-browser-dynamic/testing': 'vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
        '@ng-bootstrap/ng-bootstrap': 'vendor/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
        '@angular/animations': 'vendor/@angular/animations/bundles/animations.umd.js',
        '@angular/animations/browser': 'vendor/@angular/animations/bundles/animations-browser.umd.js',
        '@angular/animations/browser/testing': 'vendor/@angular/animations/bundles/animations-browser-testing.umd.js',
        '@angular/platform-browser/animations': 'vendor/@angular/platform-browser/bundles/platform-browser-animations.umd.js'
    },
    packages: {
        // Thirdparty barrels.
        'rxjs': { main: 'index' },
        'cjlib': {
            format: 'cjs',
            main: 'cjlib.umd.js'
        },
        // Set the default extension for the root package, because otherwise the demo-app can't
        // be built within the production mode. Due to missing file extensions.
        '.': {
            defaultExtension: 'js'
        }
    }
});
