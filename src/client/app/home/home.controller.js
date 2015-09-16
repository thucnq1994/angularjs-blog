(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$stateParams', '$http', '$filter'];
    /* @ngInject */
    function HomeController($stateParams, $http, $filter) {
        var vm = this;
        var itemsPerPage = 2;
        vm.page = $stateParams.page || 1;
        var numbPage = 0;

        $http.get('http://192.168.29.92:5000/posts').success(function(data) {
            var numbItem = vm.page * itemsPerPage;
            var i = 0;
            var from = (vm.page - 1) * itemsPerPage;
            vm.posts = $filter('filter')(data, function(d) {
                numbPage++;
                if (i < numbItem) {
                    i++;
                    if (i > from) {
                        return d;
                    }
                }
            });
        });

        vm.pagination = function() {
            var input = [];

            for (var i = 1; i <= Math.ceil(numbPage / itemsPerPage); i += 1) {
                input.push(i);
            }
            return input;
        };
    }
})();
