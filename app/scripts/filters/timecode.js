(function() {
    function timecode() {
        return function(seconds) {
            if (Number.isNaN(seconds)) {
                return '-:--';
            }

            return buzz.toTimer(seconds);
        };
    }

    angular
        .module('blocJams')
        .filter('timecode', timecode);
})();
