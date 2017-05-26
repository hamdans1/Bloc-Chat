(function() {
    function Message($firebaseArray, $cookies) {
        var Message = {};

        var ref = firebase.database().ref().child("messages");

        var messages = $firebaseArray(ref);

        var currentRoomId = null;

        var convertTimeStamp = function(timestamp) {
            var d = new Date(timestamp),
                yyyy = d.getFullYear(),
                mm = ('0' + (d.getMonth() + 1)).slice(-2),
                dd = ('0' + d.getDate()).slice(-2),
                hh = d.getHours(),
                h = hh,
                min = ('0' + d.getMinutes()).slice(-2),
                ampm = 'AM',
                time;

            if (hh > 12) {
                h = hh - 12;
                ampm = 'PM';
            } else if (hh === 12) {
                h = 12;
                ampm = 'PM';
            } else if (hh == 0) {
                h = 12;
            }
            time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

            return time;
        }

        this.currentMessage = {};

        this.messageString = "";

        Message.getByRoomId = function(roomId) {
            currentRoomId = roomId;
            Message.currentMessage = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        };

        Message.send = function() {
            if (currentRoomId) {
                messages.$add({
                    username: $cookies.get('blocChatCurrentUser'),
                    content: Message.messageString,
                    roomId: currentRoomId,
                    sentAt: convertTimeStamp(Date.now())
                });
            }
        }

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();