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
            });
    }

    function BlocChatCookies($cookies, $uibModal) {
        var $ctrl = this;
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                templateUrl: '/templates/username_modal.html',
                controller: 'UsernameInstanceCtrl',
                controllerAs: 'usernameModal',
                ariaDescribedBy: 'username-modal-body',
                ariaLabelledBy: 'username-modal-title',
                keyboard: false,
                backdrop: 'static',
                size: 'sm',

            });

            $ctrl.toggleAnimation = function() {

                $ctrl.animationEnabled = !$ctrl.animationEnabled;
            }

            modalInstance.result.then(function(name) {
                this.username = name;
                $cookies.put('blocChatCurrentUser', name);
            });
        }
    }

    angular
        .module('blocChat', ['ngCookies', 'ui.bootstrap', 'ui.router', 'firebase'])
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();