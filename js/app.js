// coded by Berenguer Pou at Ubiqum Code Academy Barcelona, 2018

// Declare the flexboxDemoApp module and its dependency 'ngMaterial'

var app = angular.module('flexboxDemoApp', ['ngMaterial']);

// Declare the AppCtrl controller
app
	.config(['$mdThemingProvider', function ($mdThemingProvider) {
		$mdThemingProvider
			.theme('default')
			.accentPalette('amber', {
				default: '700'
			});
}])
	.controller('AppCtrl', ['$scope', function ($scope) {
		$scope.parent = {
			flexDirection: 'row',
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
			alignItems: 'stretch',
			alignContent: 'stretch'
		};

		$scope.children_width = 12; // %

		$scope.children = [];

		var addChild = function (order, flexGrow, flexShrink, flexBasis, alignSelf, width, height) {
			$scope.children.push({
				order: order || 0,
				flexGrow: flexGrow || 0,
				flexShrink: flexShrink || 1,
				flexBasis: flexBasis || 'auto',
				alignSelf: alignSelf || 'auto',
				height: height || '',
				width: width || ''
			});
		};
		var removeChild = function (index) {
			$scope.children.splice(index, 1);
		};

		$scope.addChild = addChild;
		$scope.removeChild = removeChild;

		for (var i = 0; i < 4; i++) {
			addChild();
		}

}]);

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});


var Pcontainer = document.getElementById('parentContainer');


function getStyle(oElm, strCssRule) {
	var strValue = "";
	if (document.defaultView && document.defaultView.getComputedStyle) {
		strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
	} else if (oElm.currentStyle) {
		strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1) {
			return p1.toUpperCase();
		});
		strValue = oElm.currentStyle[strCssRule];
	}
	return strValue;
}


