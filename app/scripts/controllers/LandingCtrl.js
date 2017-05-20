(function() {
    function LandingCtrl(Room, Message) {

        this.rooms = Room.all;

        this.message = Message;

    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', 'Message', LandingCtrl]);
})();