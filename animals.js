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
            ['D', 'O', 'L', 'P', 'H', 'I', 'N', 'O', 'E', 'L', 'B', 'C', 'F', 'I'],
            ['I', 'D', 'Y', 'E', 'K', 'N', 'O', 'M', 'L', 'I', 'G', 'O', 'D', 'T'],
            ['C', 'L', 'E', 'L', 'C', 'D', 'E', 'E', 'R', 'O', 'R', 'E', 'A', 'A'],
            ['E', 'L', 'P', 'E', 'A', 'P', 'I', 'G', 'I', 'N', 'I', 'Q', 'A', 'B'],
            ['G', 'D', 'R', 'R', 'M', 'S', 'D', 'B', 'R', 'N', 'L', 'F', 'R', 'Q'],
            ['K', 'R', 'R', 'R', 'E', 'L', 'L', 'E', 'L', 'W', 'E', 'T', 'K', 'Y'],
            ['A', 'A', 'N', 'I', 'L', 'T', 'N', 'A', 'H', 'P', 'E', 'L', 'E', 'T'],
            ['N', 'P', 'K', 'U', 'P', 'B', 'I', 'R', 'K', 'P', 'F', 'R', 'G', 'A'],
            ['G', 'O', 'N', 'Q', 'D', 'O', 'N', 'K', 'E', 'Y', 'N', 'L', 'A', 'C'],
            ['A', 'E', 'D', 'S', 'O', 'T', 'L', 'B', 'R', 'E', 'L', 'W', 'O', 'D'],
            ['R', 'L', 'E', 'L', 'I', 'D', 'O', 'C', 'O', 'R', 'C', 'E', 'O', 'W'],
	    ['O', 'B', 'O', 'G', 'E', 'R', 'T', 'I', 'B', 'B', 'A', 'R', 'K', 'A'],
            ['O', 'T', 'E', 'H', 'E', 'I', 'A', 'A', 'R', 'O', 'E', 'G', 'R', 'B'],
            ['O', 'R', 'R', 'T', 'P', 'O', 'N', 'G', 'F', 'P', 'D', 'O', 'G', 'U']
        ];
        $scope.words = [
            'LION', 'BAT', 'ELEPHANT', 'DEER', 'DONKEY', 'CROCODILE', 'DOG', 'OWL', 'CAMEL',
            'TIGER', 'BEAR', 'RABBIT','MONKEY','CAT','WOLF','KANGAROO','LEOPARD', 'SQUIRREL'
        ];
    });

})(window.angular);