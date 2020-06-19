
var dec = 0;
$("#d").on("click",function(){

dec--;
$("h1").text(dec);
});
$("#i").on("click",function(){

dec++;
$("h1").text(dec);
});
$("#r").on("click",function(){

var re = dec-dec;
$("h1").text(re);
});
