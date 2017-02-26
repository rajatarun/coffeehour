'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .directive('slideDirective',['$window','$interval',function($window,$interval){
        var linker = function(s,e,a){
            var resigeBG = function(){
                var width = $window.innerWidth;
                var height = $window.innerHeight;
                var i = 0;
                e.css({
                    'height':height.toString()+'px',
                    'width':width.toString()+'px',
                    'padding':0,
                    'margin':0,
                    'background-image':'url('+e[0].attributes['slide-directive'].value+')',
                    'background-size': 'cover',
                    '-webkit-filter': 'sepia(-50%)',
                    'z-index':-1});
            }
            resigeBG();
        }
        return{
            restrict:'A',
            link:linker
        }
    }])
    .directive('fullPage',['$window','$interval',function($window,$interval){
        var linker = function(s,e,a){
            var resigeBG = function(){
                var width = $window.innerWidth;
                var height = $window.innerHeight;
                var i = 0;
                e.css({
                    'height':height.toString()+'px',
                    'width':width.toString()+'px',
                    'padding':0,
                    'margin':0,
                    'background-size': 'cover',
                    '-webkit-filter': 'sepia(-50%)',
                    'z-index':-1});
            }
            resigeBG();
        }
        return{
            restrict:'A',
            link:linker
        }
    }])
    .controller('firstPageController',["$scope",function($scope){

    }]);