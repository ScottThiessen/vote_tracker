'use strict';

$(function() {
  //pie chart
  var data = [
  {
    value: 50,
    color: '#0000ff',
    highlight: '#5c67ff',
    label: 'Pig'
  },
  {
    value: 50,
    color: 'green',
    highlight: '#00db21',
    label: 'Horse'
  },
  ];

  var options = {
    segmentShowStroke: true,
    animateScale: true
  }

  var graph = document.getElementById('graph').getContext('2d');
  new Chart(graph).Doughnut(data, options);
  //end pie chart

  var catArray = [];

  var Kitten = function(name, imgPath) {
    this.name = name;
    this.imgPath = imgPath;
    this.votes = 0;
  };

  var cat0 = new Kitten('Whiskers', 'trackerImgs/Cat0.jpg');
  var cat1 = new Kitten('Joe', 'trackerImgs/Cat1.jpg');
  var cat2 = new Kitten('6god', 'trackerImgs/Cat2.jpg');
  var cat3 = new Kitten('Woes', 'trackerImgs/Cat3.jpg');
  var cat4 = new Kitten('Legend', 'trackerImgs/Cat4.jpg');
  var cat5 = new Kitten('Phillip', 'trackerImgs/Cat5.jpg');
  var cat6 = new Kitten('Curt', 'trackerImgs/Cat7.jpg');
  var cat7 = new Kitten('Drake', 'trackerImgs/Cat8.jpg');
  var cat8 = new Kitten('Ludacris', 'trackerImgs/Cat9.jpg');
  var cat9 = new Kitten('Legolas', 'trackerImgs/Cat10.jpg');
  var cat10 = new Kitten('Milkyway', 'trackerImgs/Cat11.jpg');
  var cat11 = new Kitten('Bilbo', 'trackerImgs/Cat12.jpg');
  var cat12 = new Kitten('Frodo', 'trackerImgs/Cat13.jpg');
  var cat13 = new Kitten('Donatello', 'trackerImgs/Cat14.jpg');
  catArray.push(cat0);
  catArray.push(cat1);
  catArray.push(cat2);
  catArray.push(cat3);
  catArray.push(cat4);
  catArray.push(cat5);
  catArray.push(cat6);
  catArray.push(cat7);
  catArray.push(cat8);
  catArray.push(cat9);
  catArray.push(cat10);
  catArray.push(cat11);
  catArray.push(cat12);
  catArray.push(cat13);

  console.log(catArray);

  var rand = Math.floor(Math.random() * catArray.length);
  var rand2 = Math.floor(Math.random() * catArray.length);
  var newRand = Math.floor(Math.random() * catArray.length);
  var newRand2 = Math.floor(Math.random() * catArray.length);

  if (rand === rand2) {
    rand2 = Math.floor(rand2 / 2);
  } else if (newRand === rand2) {
    newRand = Math.floor(newRand / 2);
  } else if (newRand === newRand2) {
    newRand2 = Math.floor(newRand2 / 2);
  };

  $('<img />', {id: 'leftImg', src: catArray[rand].imgPath}).appendTo($('#cat-left')).height(285).width(285);
  $('<img />', {id: 'rightImg', src: catArray[rand2].imgPath}).appendTo($('#cat-right')).height(285).width(285);


  $('#leftClick').click(function(e) {
    this.votes + 1;

  });

  $('#rightClick').click(function(f) {
    this.votes +1;
  });


  console.log(rightImg);

});
