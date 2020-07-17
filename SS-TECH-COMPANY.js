$(document).ready(function(){
$(".VG").hide()	
$(".CS").hide()
$(".SM").hide()
$(".login").hide()
$(".sign").hide()

})
var alreadyincart=false
var items=[]
 
$("#VideoGames").on("click",function(){
$(".SM").hide()
$(".CS").hide()
$("#intro").hide()
$(".Login").hide()
$(".sign").hide()
$(".VG").show()


})
$('#Consoles').on("click",function(){
	$('.SM').hide()
	$(".VG").hide()	
	$('#intro').hide()
	$('login').hide()
	$("sign").hide()
	$('.CS').show()
})
$('#Smartphones').on("click",function(){
	$('.CS').hide()
	$(".VG").hide()	
	$('#intro').hide()
	$('.login').hide()
	$('sign').hide()
	$('.SM').show()

})
$('#Home').on('click',function(){
	$('.SM').hide()
	$(".CS").hide()
	$(".VG").hide()
	$('.login').hide()
	$(".sign").hide()
	$(".shopping").hide()
	$("#intro").show()
})
$('#LogIn').on('click',function(){
	$(".CS").hide()
	$(".SM").hide()
	$(".VG").hide()
	 $('#intro').hide()
	 $(".sign").hide()
	 $(".shopping").hide()
	 $(".login").show()
})
$("#SignUp").on("click",function(){
	$(".CS").hide()
	$(".SM").hide()
	$(".VG").hide()
	 $('#intro').hide()
	 $(".login").hide()
	 $(".shopping").hide()
     $(".sign").show()
})
$("#Cart").on("click",function(){
	$(".CS").hide()
	$(".SM").hide()
	$(".VG").hide()
	 $('#intro').hide()
	 $(".login").hide()
     $(".sign").hide()
     $(".shopping").show()
      if(!alreadyincart){
      	for (var i = 0; i < items.length; i++) { 
     	$(`<p>${items[i].product+": "+items[i].price+"$"}</p>`).appendTo(".shopping")
   
     }
     return items=[]
    }

})
$("#su").on("click",function(){
	localStorage.setItem("name",$("#un1").val())
	localStorage.setItem("pass",$("#ps1").val())
	if($("#un1").val()==="" && $("#ps1").val()===""){
		alert("Fill in The blanks")
	}
	 else{
	 	alert("You Signed Up ")}
})
$("#lg").on("click",function(){
	var checkname=localStorage.getItem("name")
	var checkpass=localStorage.getItem("pass")
	if (checkname=== $("#un").val() && checkpass ===$("#ps").val()) {
		alert(" Welcome you logged in !")
	}else {alert("try again maybe the username or the password are wrong!!!")}
})

 $("#cd1").on("click",function(){
     items.push({
     	product:document.getElementById("v1").value,
     	price:document.getElementById("vp1").value
     })
     return items
 })
  $("#cd2").on("click",function(){
          items.push({
      	product:document.getElementById("v2").value,
      	price:document.getElementById("vp2").value
      })
      return items
  })
// $("#cd3").on("click",function(){
//    items.push({
//      	product:document.getElementById("v3").value,
//      	price:document.getElementById("vp3").value
//      })
//      return items
//  })

// $("#cd4").on("click",function(){

// })
// $("#cd5").on("click",function(){

// })
// $("#cd6").on("click",function(){

// })
// $("#cd7").on("click",function(){

// })
// $("#cd8").on("click",function(){

// })
// $("#cd9").on("click",function(){

// })
// $("#cd10").on("click",function(){

// })
// $("#cs1").on("click",function(){

// })
// $("#cs2").on("click",function(){

// })
// $("#cs3").on("click",function(){

// })
// $("#cs4").on("click",function(){

// })
// $("#cs5").on("click",function(){

// })
// $("#cs6").on("click",function(){

// })
// $("#cs7").on("click",function(){

// })
// $("#cs8").on("click",function(){

// })
// $("#sm1").on("click",function(){

// })
// $("#sm2").on("click",function(){

// })
// $("#sm3").on("click",function(){

// })
// $("#sm4").on("click",function(){

// })
// $("#sm5").on("click",function(){

// })
// $("#sm6").on("click",function(){

// })
// $("#sm7").on("click",function(){

// })
// $("#sm8").on("click",function(){

// })
// $("#sm9").on("click",function(){

// })
// $("#sm10").on("click",function(){

// })

