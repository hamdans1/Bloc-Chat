(function() {
    function RoomListCtrl(Room) {
        this.rooms = Room.all;
    }
    angular
        .module('blocChat')
        .controller('RoomListCtrl', ['Room', RoomListCtrl]);

})();