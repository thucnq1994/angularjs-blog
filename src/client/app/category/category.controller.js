(function () {
    'use strict';

    angular
        .module('app.category')
        .controller('CategoryController', CategoryController);

    CategoryController.$inject = ['$stateParams', '$http', '$filter'];
    /* @ngInject */
    function CategoryController($stateParams, $http, $filter) {
        var vm = this;
        var itemsPerPage = 1;
        vm.categoryId = $stateParams.categoryId;
        vm.page = $stateParams.page || 1;
        var numbPage = 0;

        $http.get('http://192.168.29.92:5000/posts').success(function(data) {
            var numbItem = vm.page * itemsPerPage;
            var i = 0;
            var from = (vm.page - 1) * itemsPerPage;
            vm.posts = $filter('filter')(data, function(d) {
                if (d.categoryId === vm.categoryId) {
                    numbPage++;
                    if (i < numbItem) {
                        i++;
                        if (i > from) {
                            return d.categoryId === vm.categoryId;
                        }
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

        // Get details info of category
        $http.get('http://192.168.29.92:5000/categories').success(function(data) {
            vm.category = $filter('filter')(data, function(d) {
                return d.id === vm.categoryId;
            })[0];
        });
    }
})();
