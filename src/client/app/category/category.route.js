(function() {
    'use strict';

    angular
        .module('app.category')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'category/id',
                config: {
                    url: '/category/:categoryId',
                    templateUrl: 'app/category/category.html',
                    controller: 'CategoryController',
                    controllerAs: 'vm'
                }
            },
            {
                state: 'category/id/page',
                config: {
                    url: '/category/:categoryId/:page',
                    templateUrl: 'app/category/category.html',
                    controller: 'CategoryController',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();
