var portfolioApp = angular.module('portfolioApp',[]);
portfolioApp.controller('GalleryListCtrl', function($scope) {
$scope.galleries = [
{ 'title':'E23',
 'when':'1976-11-14',
 'thumbnailUrl':'img/gallery/e23.jpg'
},
{ 'title':'E28',
 'when':'1980-09-10',
 'thumbnailUrl':'img/gallery/e28.jpg'
},
{ 'title':'E32',
 'when':'1985-09-11',
 'thumbnailUrl':'img/gallery/e32.jpg'
},
{ 'title':'E38',
 'when':'1994-11-14',
 'thumbnailUrl':'img/gallery/e38.jpg'
},
{ 'title':'E39',
 'when':'1995-09-15',
 'thumbnailUrl':'img/gallery/e39.jpg'
},
{ 'title':'E46',
 'when':'1998-07-04',
 'thumbnailUrl':'img/gallery/e46.jpg'
},
];
$scope.galleries.length;
$scope.galleries.sekcja = " The family of BMW";
$scope.sortList = [
{
'label':'Alfabetycznie',
'value':'title'
},
{
'label':'Chronologicznie',
'value':'when'
},
{
'label':'Achronologicznie',
'value':'-when'
}
]; 

$scope.orderProp = 'when';
}); 



