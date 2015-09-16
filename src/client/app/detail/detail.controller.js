(function () {
    'use strict';

    angular
        .module('app.detail')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['$stateParams', '$http', '$filter'];
    /* @ngInject */

    function DetailController($stateParams, $http, $filter) {

        var vm = this;
        var postId = $stateParams.postId || 1;

        $http.get('http://192.168.29.92:5000/posts').success(function(data) {
            vm.post = $filter('filter')(data, function(d) {
                return d.id === postId;
            })[0];
        });
    }
})();
