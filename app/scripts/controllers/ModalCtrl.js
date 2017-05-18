(function() {
    function ModalCtrl($uibModal, $log, Room) {
        this.open = function() {
            var modalInstance = $uibModal.open({
                animation: this.animationsEnabled,
                templateUrl: '/templates/chat_modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'chatModal'

            });

            modalInstance.result.then(function(name) {
                this.room = name;
                Room.create(this.room);
            }, function() {
                $log.info('Modal dismissed at ' + new Date());
            });
        };

        this.toggleAnimation = function() {
            this.animationsEnabled = !this.animationsEnabled;
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', '$log', 'Room', ModalCtrl]);
})();