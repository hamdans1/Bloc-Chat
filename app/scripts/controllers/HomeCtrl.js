(function() {
    function HomeCtrl(Room) {
        this.heroTitle = "What We Do";

        this.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();