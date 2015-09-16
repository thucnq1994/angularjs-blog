(function() {
    'use strict';

    angular
        .module('app.tags')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'tags',
                config: {
                    url: '/tags',
                    templateUrl: 'app/tags/tags.html',
                    controller: 'TagsController',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();
