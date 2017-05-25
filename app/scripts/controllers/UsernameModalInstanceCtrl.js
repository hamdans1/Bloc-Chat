(function() {
    function UsernameInstanceCtrl($uibModalInstance, $cookies) {
        this.ok = function(name) {
            var currentUser = this.name;
            if (currentUser) {
                $uibModalInstance.close();
            }
        };
    }

    angular
        .module('blocChat')
        .controller('UsernameInstanceCtrl', ['$uibModalInstance', UsernameInstanceCtrl]);
})();