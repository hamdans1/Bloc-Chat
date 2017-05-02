(function() {
    function LandingCtrl() {
        this.heroTitle="What We Do";
    }
    
    angular
        .module('blocChat')
        .controller('LandingCtrl', LandingCtrl);
})();