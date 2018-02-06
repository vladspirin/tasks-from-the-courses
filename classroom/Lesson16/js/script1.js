"use strict";
// var st = '{"aa": 1, "bb": 2, "cc": [1, 2, 3, 4]}';  
// var ob = JSON.parse(st);
// console.log(ob);  

// var ob2 = {
//   1: "text1",
//   2: "text2",
//   3: "text3",
//   4: true,
//   5: [1,2,3,4,5,6]
// }
// var st2 = JSON.stringify(ob2);
// console.log(ob2);   


$(function () {

search("nature");  

$('.search').click(function() {
  var val = $('.search-input').val();// считываем данные с поля ввода
  search(val);
});

  $('.search-input').keypress(function(e) {
    var val = $('.search-input').val();// считываем данные с поля ввода
    if(e.keyCode == 13){
      search(val);
    }
   });

  function search(v) {
    var url = "https://pixabay.com/api/?key=4919792-453f009144b7806cb72243b60&q="+v+"&image_type=photo&per_page=20";
   $.getJSON(url, rezData); 
  }
  function rezData(data) {
    var results = data.hits;
    //  console.log(results);
    $('.grid-item').each(function (index, el) {
      // console.log(index);
      console.log(el);

      var r = results[index];
      // console.log(r);
      var webimg = r.webformatURL;// Смотреть в API
      $(el).find('img').attr("src", webimg);
      $(el).find('img').attr("offsetHeight", r);
    });
  }
  // search();
});

function NYTimesAPI(paramsData) {
  $.getJSON(url, function (data, textStatus) {
      
    }
  );
}
NYTimesAPI();
//"fddf'wewewewew'sdf,sd,fs"