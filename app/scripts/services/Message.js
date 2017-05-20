(function() {
    function Message($firebaseArray) {
        var Message = {};

        var ref = firebase.database().ref().child("messages");

        var messages = $firebaseArray(ref);

        var currentRoom = null;

        Message.getByRoomId = function(roomId) {
            currentRoom = roomId;
            console.log(currentRoom);
            ref.orderByChild('roomId').equalTo(roomId);
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();