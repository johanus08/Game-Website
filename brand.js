(function(angular) {
    'use strict';

    var app = angular.module('puzzleApp', ['wordSearchPuzzle']);

    // puzzle types
    var types = [
        { id: 'word-search-puzzle', title: 'Word search puzzle' }
    ];

    /**
     * Config
     */
    app.config(function($routeProvider) {
        $routeProvider.when('/:type');
    });

    /**
     * Startup
     */
    app.run(function($rootScope, $route, $filter) {
        $rootScope.types = types;
        $rootScope.type = types[0].id;

        // set type on route change
        $rootScope.$on('$routeChangeSuccess', function(event, route) {
            $rootScope.type = ($filter('filter')(types, { id: route.params.type }).length ? route.params.type : types[0].id);
        });
    });

    
    /**
     * Word search puzzle controller
     */
    app.controller('wordSearchCtrl', function($scope) {
        $scope.matrix = [
            ['A', 'M', 'U', 'P', 'E', 'N', 'I', 'Z', 'A', 'R', 'A', 'F', 'I', 'P'],
            ['E', 'S', 'R', 'N', 'A', 'F', 'N', 'C', 'N', 'S', 'O', 'C', 'I', 'A'],
            ['O', 'A', 'E', 'E', 'S', 'I', 'I', 'E', 'U', 'R', 'K', 'G', 'U', 'S'],
            ['S', 'D', 'D', 'A', 'N', 'L', 'K', 'I', 'E', 'K', 'R', 'U', 'F', 'S'],
            ['E', 'I', 'I', 'P', 'V', 'A', 'E', 'V', 'O', 'A', 'W', 'C', 'S', 'A'],
            ['E', 'D', 'S', 'R', 'U', 'A', 'E', 'F', 'D', 'N', 'S', 'C', 'A', 'M'],
            ['G', 'A', 'T', 'O', 'R', 'R', 'D', 'A', 'E', 'A', 'I', 'I', 'A', 'S'],
            ['F', 'S', 'S', 'J', 'N', 'Z', 'R', 'S', 'L', 'V', 'U', 'E', 'K', 'U'],
            ['E', 'E', 'E', 'E', 'R', 'P', 'D', 'P', 'P', 'E', 'N', 'I', 'Y', 'N'],
            ['R', 'F', 'W', 'C', 'N', 'S', 'D', 'A', 'P', 'I', 'A', 'B', 'N', 'G'],
            ['S', 'I', 'Y', 'T', 'I', 'E', 'C', 'U', 'A', 'E', 'A', 'O', 'C', 'S'],
	    ['M', 'G', 'V', 'I', 'V', 'O', 'L', 'P', 'C', 'R', 'W', 'K', 'E', 'S'],
            ['U', 'U', 'E', 'V', 'B', 'O', 'B', 'B', 'Y', 'B', 'R', 'O', 'W', 'N'],
            ['E', 'V', 'S', 'E', 'D', 'T', 'U', 'V', 'R', 'E', 'D', 'M', 'I', 'A']
        ];
        $scope.words = [
            'APPLE', 'PUMA', 'BOBBYBROWN', 'SAMSUNG', 'PRADA', 'PROJECTIVE', 'ZARA', 'GUCCI',
            'FOREVERNEW', 'FILA', 'REDMI', 'WESTSIDE','ADIDAS','VIVO','NIKE'
        ];
    });

})(window.angular);