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
            ['A', 'O', 'O', 'I', 'G', 'I', 'Y', 'V', 'L', 'B', 'K', 'B', 'I', 'I'],
            ['O', 'W', 'L', 'B', 'L', 'E', 'O', 'U', 'I', 'H', 'P', 'N', 'O', 'K'],
            ['I', 'H', 'U', 'L', 'K', 'W', 'W', 'K', 'R', 'O', 'W', 'N', 'I', 'N'],
            ['H', 'I', 'L', 'A', 'A', 'B', 'G', 'N', 'P', 'G', 'P', 'B', 'O', 'P'],
            ['B', 'T', 'P', 'C', 'E', 'I', 'R', 'T', 'B', 'L', 'U', 'E', 'G', 'V'],
            ['R', 'E', 'K', 'K', 'B', 'V', 'E', 'I', 'N', 'V', 'K', 'I', 'U', 'E'],
            ['D', 'N', 'U', 'E', 'R', 'L', 'E', 'D', 'I', 'Y', 'W', 'N', 'I', 'N'],
            ['D', 'P', 'L', 'Y', 'G', 'E', 'N', 'O', 'Y', 'E', 'C', 'E', 'R', 'W'],
            ['I', 'U', 'O', 'D', 'B', 'E', 'L', 'B', 'W', 'L', 'H', 'W', 'O', 'E'],
            ['N', 'R', 'E', 'I', 'D', 'E', 'E', 'T', 'P', 'L', 'B', 'E', 'R', 'R'],
            ['D', 'P', 'R', 'E', 'T', 'E', 'I', 'E', 'E', 'O', 'E', 'N', 'A', 'R'],
	    ['I', 'L', 'E', 'N', 'C', 'I', 'R', 'E', 'U', 'W', 'G', 'I', 'N', 'B'],
            ['G', 'E', 'R', 'B', 'R', 'O', 'W', 'N', 'C', 'N', 'P', 'E', 'G', 'W'],
            ['O', 'O', 'N', 'I', 'B', 'E', 'W', 'D', 'P', 'L', 'R', 'I', 'E', 'L']
        ];
        $scope.words = [
            'VIOLET', 'PURPLE', 'WHITE', 'ORANGE', 'PINK', 'BROWN', 'YELLOW', 'RED',
            'GREEN', 'INDIGO', 'BLACK', 'BLUE'
        ];
    });

})(window.angular);