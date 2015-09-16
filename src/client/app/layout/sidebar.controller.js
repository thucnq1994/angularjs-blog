(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$state', 'routerHelper', '$http', '$scope'];
    /* @ngInject */
    function SidebarController($state, routerHelper, $http, $scope) {
        var vm = this;
        var states = routerHelper.getStates();
        vm.isCurrent = isCurrent;

        activate();

        function activate() { getNavRoutes(); }

        $http.get('http://192.168.29.92:5000/categories').success(function(data) {
            $scope.categories = data;
        });

        function getNavRoutes() {
            vm.navRoutes = states.filter(function(r) {
                return r.settings && r.settings.nav;
            }).sort(function(r1, r2) {
                return r1.settings.nav - r2.settings.nav;
            });
        }

        function isCurrent(route) {
            if (!route.title || !$state.current || !$state.current.title) {
                return '';
            }
            var menuName = route.title;
            return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
        }
    }
})();
