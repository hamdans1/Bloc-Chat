(function() {
    function LandingCtrl(Room, Message) {
        var currentRoom = null;

        this.rooms = Room.all;

        this.getRoom = function(roomName) {
            currentRoom = roomName;
            console.log(currentRoom);
        };

        this.message = Message;

    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', 'Message', LandingCtrl]);
})();