(function() {
    function Message($firebaseArray) {
        var Message = {};

        var ref = firebase.database().ref().child("messages");

        var messages = $firebaseArray(ref);

        var currentRoomId = null;

        this.currentMessage = {};

        Message.getByRoomId = function(roomId) {
            currentRoomId = roomId;
            Message.currentMessage = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();