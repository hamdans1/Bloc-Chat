(function() {
    function Message($firebaseArray, $cookies) {
        var Message = {};

        var ref = firebase.database().ref().child("messages");

        var messages = $firebaseArray(ref);

        var currentRoomId = null;

        this.currentMessage = {};

        Message.getByRoomId = function(roomId) {
            currentRoomId = roomId;
            Message.currentMessage = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        };

        Message.send = function(newMessage) {
            if (currentRoomId) {
                messages.$add({
                    username: $cookies.get('blocChatCurrentUser'),
                    content: newMessage,
                    roomId: currentRoomId,
                    sentAt: Date.now()
                });
            }
        }

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();