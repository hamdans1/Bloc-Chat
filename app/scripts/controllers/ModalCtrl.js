(function() {
    function ModalCtrl($uibModal, $log, Room) {
        var $ctrl = this;

        $ctrl.open = function() {
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'chat-modal-title',
                ariaDescribedBy: 'chat-modal-body',
                templateUrl: '/templates/chat_modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'chatModal',
                keyboard: false,
                size: 'sm'

            });

            modalInstance.result.then(function(name) {
                $ctrl.room = name;
                Room.create($ctrl.room);
            }, function() {
                $log.info('Modal dismissed at ' + new Date());
            });
        };

    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', '$log', 'Room', ModalCtrl]);
})();