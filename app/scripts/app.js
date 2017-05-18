(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home'
            });
    }

    angular
        .module('blocChat', ['ui.bootstrap', 'ui.router', 'firebase'])
        .config(config);
})();