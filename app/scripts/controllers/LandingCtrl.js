(function() {
    function LandingCtrl(Room) {
        this.heroTitle = "What We Do";

        this.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', LandingCtrl]);
})();