(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
        
        $stateProvider
            .state('landing', {
                url: '/',
                controller: 'LandingCtrl as landing',
                templateUrl: '/templates/landing.html'
        })
            .state('roomList', {
                url: '/room_list',
                controller: 'RoomListCtrl as RoomList',
                templateUrl: '/templates/room_list.html'
        });
    }

    angular
        .module ('blocChat', ['ui.router','firebase'])
        .config(config);
})();