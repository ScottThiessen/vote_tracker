'use strict';

$(function() {
  //pie chart
  var data = [
  {
    value: 1,
    color: '#ff6138',
    highlight: '#FF8F8F',
    label: 'Right'
  },
  {
    value: 1,
    color: '#ffff9d',
    highlight: '#F7FFC4',
    label: 'Left'
  },
  ];

  var options = {
    segmentShowStroke: true,
    animateScale: true
  };

  var graph = document.getElementById('graph').getContext('2d');
  var chart = new Chart(graph).Doughnut(data, options);


    var catImgs = [];

    $.ajax({
      url: 'https://api.imgur.com/3/album/uGpCq.json',
      method: 'GET',
      headers: {'Authorization': 'Client-ID 9645782d9872f4d'},
    });

    /*xhr.done(function(res) {
      if(res.status === 200) {

        }
      }
    })
  });*/

  var Kitten = function(name, imgPath) {
    this.name = name;
    this.imgPath = imgPath;
  };

  var cat0 = new Kitten('Whiskers', 'http://i.imgur.com/MwjXCad.jpg');
  var cat1 = new Kitten('Joe', 'http://i.imgur.com/1AUbasg.jpg');
  var cat2 = new Kitten('6god', 'http://i.imgur.com/pEsWPRv.jpg');
  var cat3 = new Kitten('Woes', 'http://i.imgur.com/Cj59Zt9.jpg');
  var cat4 = new Kitten('Legend', 'http://i.imgur.com/3n4shvg.jpg');
  var cat5 = new Kitten('Phillip', 'http://i.imgur.com/6pG4ex6.jpg');
  var cat6 = new Kitten('Curt', 'http://i.imgur.com/m79DcWs.jpg');
  var cat7 = new Kitten('Drake', 'http://i.imgur.com/2envTS4.jpg');
  var cat8 = new Kitten('Ludacris', 'http://i.imgur.com/xCTf9Q4.jpg');
  var cat9 = new Kitten('Legolas', 'http://i.imgur.com/CnPwYo1.jpg');
  var cat10 = new Kitten('Milkyway', 'http://i.imgur.com/mtcYDjl.jpg');
  var cat11 = new Kitten('Bilbo', 'http://i.imgur.com/cfsy6KE.jpg');
  var cat12 = new Kitten('Frodo', 'http://i.imgur.com/qnS5CtF.jpg');
  var cat13 = new Kitten('Donatello', 'http://i.imgur.com/YZw4ka1.jpg');
  catImgs.push(cat0);
  catImgs.push(cat1);
  catImgs.push(cat2);
  catImgs.push(cat3);
  catImgs.push(cat4);
  catImgs.push(cat5);
  catImgs.push(cat6);
  catImgs.push(cat7);
  catImgs.push(cat8);
  catImgs.push(cat9);
  catImgs.push(cat10);
  catImgs.push(cat11);
  catImgs.push(cat12);
  catImgs.push(cat13);

  var rand = Math.floor(Math.random() * catImgs.length);
  var rand2 = Math.floor(Math.random() * catImgs.length);

  var imgRender = function() {
    rand = Math.floor(Math.random() * catImgs.length);
    rand2 = Math.floor(Math.random() * catImgs.length);
      while (rand === rand2) {
        rand2 = Math.floor(rand2 / 3) + 1;
      }
  };

  while (rand === rand2) {
    rand2 = Math.floor(rand2 / 3) + 1;
  };


  $('<img />', {id: 'leftImg', src: catImgs[rand].imgPath}).appendTo($('#cat-left')).height(285).width(285);
  $('<img />', {id: 'rightImg', src: catImgs[rand2].imgPath}).appendTo($('#cat-right')).height(285).width(285);


  $('#cat-left').click(function(e) {
    e.preventDefault();
    chart.segments[1].value++;
    chart.update();
    $('#leftImg').remove();
    $('#rightImg').remove();
    imgRender();
    $('<img />', {id: 'rightImg', src: catImgs[rand2].imgPath}).appendTo($('#cat-right')).height(285).width(285);
    $('<img />', {id: 'leftImg', src: catImgs[rand].imgPath}).appendTo($('#cat-left')).height(285).width(285);
  });

  $('#cat-right').click(function(f) {
    f.preventDefault();
    chart.segments[0].value++;
    chart.update();
    $('#rightImg').remove();
    $('#leftImg').remove();
    imgRender();
    $('<img />', {id: 'rightImg', src: catImgs[rand2].imgPath}).appendTo($('#cat-right')).height(285).width(285);
    $('<img />', {id: 'leftImg', src: catImgs[rand].imgPath}).appendTo($('#cat-left')).height(285).width(285);
  });
});
