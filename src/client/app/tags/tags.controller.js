(function () {
    'use strict';

    angular
        .module('app.tags')
        .controller('TagsController', TagsController);

    TagsController.$inject = ['$http', '$filter'];
    /* @ngInject */
    function TagsController($http, $filter) {
        var vm = this;
        vm.tags = [];

        $http.get('http://192.168.29.92:5000/posts').success(function(data) {
            $filter('filter')(data, function(d) {
                var res = d.tags.split(',');
                res.forEach(function(entry) {
                    if (vm.tags.indexOf(entry) === -1) {
                        vm.tags.push(entry);
                    }
                });
            });
        });
    }
})();
