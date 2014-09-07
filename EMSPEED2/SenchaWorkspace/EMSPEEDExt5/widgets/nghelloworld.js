//Ext.define('widget.nghelloworld', {
//    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
//    angularCode: function (ngVar) {
//        angular.module('app')
//        .controller(ngVar + 'Controller', function ($scope) { })
//        .factory(ngVar + 'Service', function ($http, $q) {
//        })
//        .directive('wt' + ngVar, function () {
//            return {
//                restrict: 'AE',
//                replace: true,
//                template: '<p style="background-color:{{color}}">Hello World',
//                link: function (scope, elem, attrs) {
//                    elem.bind('click', function () {
//                        elem.css('background-color', 'red');
//                        scope.$apply(function () {
//                            scope.color = "red";
//                        });
//                    });
//                    elem.bind('mouseover', function () {
//                        elem.css('cursor', 'pointer');
//                    });
//                }
//            };
//        });
//    }
//});


Ext.define('widget.nghelloworld', {
    extend: 'EMSPEEDExt5.view.baseclass.baseclassWidget',
    statics: {
        addStyles: function (styles) { this.callParent(arguments); },
        angularCode: function (xclass) {
            var controller = xclass + 'Controller';
            var service = xclass + 'Service';
            var directive = xclass;

            //*********************************************************** do not modify above this line


            angular.module('app')
            .controller(controller, ['$scope', function ($scope) { }])
            .factory(service, ['$http', '$q', function ($http, $q) { }])
            .directive(directive, function () {
                return {
                    restrict: 'A',
                    scope: { widgetdata: '=' },
                    replace: true,
                    template: '<p style="background-color:{{color}}">{{widgetdata.text}}</p></div>'
                    //link: function (scope, elem, attrs) {
                    //    elem.bind('click', function () {
                    //        elem.css('background-color', 'red');
                    //        scope.$apply(function () {
                    //            scope.color = "red";
                    //        });
                    //    });
                    //    elem.bind('mouseover', function () {
                    //        elem.css('cursor', 'pointer');
                    //    });
                    //}
                };
            });



            //*********************************************************** do not modify below this line
        }
    },
},
function (o) {
    var className = o.$className;
    var start = className.indexOf('.');
    var xclass = className.substring(start + 1);
    o.angularCode(xclass);
});

