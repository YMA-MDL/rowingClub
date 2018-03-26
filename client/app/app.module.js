
'use strict';

angular
    .module('app.sport', [
        'ui.router',
        'app.sport.calendar'
    ])
    .run(() => {

    })
    .config(function($stateProvider, $urlRouterProvider) {
        
            $urlRouterProvider.otherwise('/home');
        
            $stateProvider
        
                // HOME STATES AND NESTED VIEWS ========================================
                .state('home', {
                    url: '/home',
                    templateUrl: 'app/components/mainview/athletelist/athletelist.html'
                })
                .state('feed', {
                    url: '/feed',
                    templateUrl: 'app/components/mainview/feed/feed.html'
                })
                .state('calendar', {
                    url: '/calendar',
                    templateUrl: 'app/components/mainview/calendar/calendar.html'
                })
        
        });
