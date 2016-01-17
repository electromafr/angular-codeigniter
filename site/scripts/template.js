angular.module('site').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('application/views/static/view1.html',
    "<div class=\"g-row\">\n" +
    "	<div class=\"g-xs-3\"></div>\n" +
    "	<div class=\"g-xs-3\"></div>\n" +
    "	<div class=\"g-xs-3\"></div>\n" +
    "	<div class=\"g-xs-3\"></div>\n" +
    "</div>"
  );

}]);
