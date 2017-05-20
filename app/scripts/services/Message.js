(function() {
    function Message($firebaseArray) {
        var Message = {};

        var ref = firebase.database().ref().child("messages");

        var messages = $firebaseArray(ref);

        var currentRoom = null;

        this.currentMessage = {};

        Message.getByRoomId = function(roomId) {
            var currentRoom = roomId;
            Message.currentMessage = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
            console.log(Message.currentMessage);
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();