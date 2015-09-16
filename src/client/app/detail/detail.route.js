(function() {
    'use strict';

    angular
        .module('app.detail')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'detail/id',
                config: {
                    url: '/detail/:postId',
                    templateUrl: 'app/detail/detail.html',
                    controller: 'DetailController',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();
