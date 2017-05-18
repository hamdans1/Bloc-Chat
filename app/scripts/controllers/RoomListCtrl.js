(function() {
    function RoomListCtrl(Room, ModalCtrl) {
        this.rooms = Room.all;
        this.chatModal = ModalCtrl;
    }
    angular
        .module('blocChat')
        .controller('RoomListCtrl', ['Room', 'ModalCtrl', RoomListCtrl]);

})();