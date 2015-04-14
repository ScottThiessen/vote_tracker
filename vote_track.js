'use strict';
(function() {
  var imgArray = [];

  imgArray = new Image();
  imgArray[0].href = 'http://imgur.com/a/DDoWy#0';

  var catLeft = document.getElementById('cat-left');
  catLeft.innerHTML =

  var pieData = [
  {
    value: 50,
    color: '#0000ff'
  },
  {
    value: 50,
    color: 'red'
  },
  ];

  var pieOptions = {
    segmentShowStroke: false,
    animateScale: true
  }

  var graph = document.getElementById('graph').getContext('2d');
  new Chart(graph).Pie(pieData, pieOptions);

})();
