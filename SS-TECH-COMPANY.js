$(document).ready(function(){//we use this method when we are ready hide every thing and show only the home page
$(".VG").hide()	
$(".CS").hide()
$(".SM").hide()
$(".login").hide()
$(".sign").hide()
$(".shopping").hide()

})

var count=0//a counter for the shopping cart so it doesn't append again when u click on it
var items=[]//declare an empty to push inside it after objects 
//storing with local storage
$("#su").on("click",function(){//when you click on the button of sign up
    localStorage.setItem("name",$("#un1").val())//store the user name
    localStorage.setItem("pass",$("#ps1").val())//store the password
    if($("#un1").val() === "" && $("#ps1").val() === ""){//if there is no value it'll alert to
        alert("Fill in The blanks")
    }
     else{
        alert("You Signed Up ")}
})
// getting data 
$("#lg").on("click",function(){
    var checkname = localStorage.getItem("name")
    var checkpass = localStorage.getItem("pass")
    if (checkname === $("#un").val() && checkpass === $("#ps").val()) {//check if the key is stored in the local or not
        alert(" Welcome you logged in !")//it's ok you can log in
    }else {alert("try again maybe the username or the password are wrong!!!")}
})

$("#VideoGames").on("click",function(){//when we click on the button of videoGames hide all the others w show only the classe of this page
    
$(".SM").hide()
$(".CS").hide()
$("#intro").hide()
$(".Login").hide()
$(".sign").hide()
$(".VG").show()


})
$('#Consoles').on("click",function(){//when we click on the button of Consoles hide all the others w show only the classe of this page
    
	$('.SM').hide()
	$(".VG").hide()	
	$('#intro').hide()
	$('.login').hide()
	$(".sign").hide()
	$('.CS').show()
})
$('#Smartphones').on("click",function(){//when we click on the button of Smartphones hide all the others w show only the classe of this page
    
	$('.CS').hide()
	$(".VG").hide()	
	$('#intro').hide()
	$('.login').hide()
	$('.sign').hide()
	$('.SM').show()

})
$('#Home').on('click',function(){//when we click on the button of home hide all the others w show only the id of this page
    
	$('.SM').hide()
	$(".CS").hide()
	$(".VG").hide()
	$('.login').hide()
	$(".sign").hide()
	$(".shopping").hide()
	$("#intro").show()
})
$('#LogIn').on('click',function(){//when we click on the button of logIn hide all the others w show only the classe of this page
    
	$(".CS").hide()
	$(".SM").hide()
	$(".VG").hide()
	 $('#intro').hide()
	 $(".sign").hide()
	 $(".shopping").hide()
	 $(".login").show()
})
$("#SignUp").on("click",function(){//when we click on the button of SignUp hide all the others w show only the classe of this page
    ;
	$(".CS").hide()
	$(".SM").hide()
	$(".VG").hide()
	 $('#intro').hide()
	 $(".login").hide()
	 $(".shopping").hide()
     $(".sign").show()
})
$("#Cart").on("click",function(){//when we click on the button of shopping cart hide all the others w show only the classe of this page
    count++;
	$(".CS").hide()
	$(".SM").hide()
	$(".VG").hide()
	 $('#intro').hide()
	 $(".login").hide()
     $(".sign").hide()
      $(".Confirm").hide()
     $(".shopping").show()
     $("#btn").hide()
      if(count===1){ //a stopping condition so when the shopping cart is clicked again won't append again 
      	for (var i = 0; i < items.length; i++) { 
     	$(`<p >${items[i].product+": "+items[i].price+"$"}</p>`).appendTo(".list")}   
     }  
})
$("#btn1").on("click",function(){ 
    $(".Confirm").show(2000)
    $("#btn").show(2000)
    var tot=0
    for (var i = 0; i < items.length; i++) {
        $(`<h1 >${tot=parseInt(tot)+parseInt(items[i].price)+"$"}</h1>`).appendTo(".Confirm")     
   }        
     return tot  

})
$("#btn").on("click",function(){

  var checkname = localStorage.getItem("name")
    var checkpass = localStorage.getItem("pass")
    if (checkname === $("#un").val() && checkpass === $("#ps").val()) {//check if the key is stored in the local or not
        alert(" Enjoy your purchases hope we see you again bye !")//it's ok you can log in
    }else {alert("you need to login!!!")}
})


// id cd is for the videoGames
 $("#cd1").on("click",function(){//when you  click on the button your add the product to your list and pushed in an array of objects
     items.push({
     	product:document.getElementById("v1").value,//value of the product 
     	price:document.getElementById("vp1").value//value of the price product 
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
$("#cd3").on("click",function(){
   items.push({
     	product:document.getElementById("v3").value,
     	price:document.getElementById("vp3").value
     })
     return items
 })

$("#cd4").on("click",function(){
	  items.push({
     	product:document.getElementById("v4").value,
     	price:document.getElementById("vp4").value
     })
     return items
})
$("#cd5").on("click",function(){
	  items.push({
     	product:document.getElementById("v5").value,
     	price:document.getElementById("vp5").value
     })
     return items
})
$("#cd6").on("click",function(){
  items.push({
     	product:document.getElementById("v6").value,
     	price:document.getElementById("vp6").value
     })
     return items
})
$("#cd7").on("click",function(){
  items.push({
     	product:document.getElementById("v7").value,
     	price:document.getElementById("vp7").value
     })
     return items
})
 $("#cd8").on("click",function(){
  items.push({
     	product:document.getElementById("v8").value,
     	price:document.getElementById("vp8").value
     })
     return items
})
$("#cd9").on("click",function(){
  items.push({
     	product:document.getElementById("v9").value,
     	price:document.getElementById("vp9").value
     })
     return items
})
$("#cd10").on("click",function(){
  items.push({
     	product:document.getElementById("v10").value,
     	price:document.getElementById("vp10").value
     })
     return items
})
//id cs if for the consoles
$("#cs1").on("click",function(){
  items.push({
     	product:document.getElementById("c1").value,
     	price:document.getElementById("cp1").value
     })
     return items
})
$("#cs2").on("click",function(){
items.push({
     	product:document.getElementById("c2").value,
     	price:document.getElementById("cp2").value
     })
     return items
})
$("#cs3").on("click",function(){
items.push({
     	product:document.getElementById("c3").value,
     	price:document.getElementById("cp3").value
     })
     return items
})
$("#cs4").on("click",function(){
items.push({
     	product:document.getElementById("c4").value,
     	price:document.getElementById("cp4").value
     })
     return items
})
$("#cs5").on("click",function(){
items.push({
     	product:document.getElementById("c5").value,
     	price:document.getElementById("cp5").value
     })
     return items
})
$("#cs6").on("click",function(){
items.push({
     	product:document.getElementById("c6").value,
     	price:document.getElementById("cp6").value
     })
     return items
})
$("#cs7").on("click",function(){
items.push({
     	product:document.getElementById("c7").value,
     	price:document.getElementById("cp7").value
     })
     return items
})
$("#cs8").on("click",function(){
items.push({
     	product:document.getElementById("c8").value,
     	price:document.getElementById("cp8").value
     })
     return items
})
//id sm is for the smartphones 
$("#sm1").on("click",function(){
items.push({
     	product:document.getElementById("s1").value,
     	price:document.getElementById("sp1").value
     })
     return items
})
$("#sm2").on("click",function(){
items.push({
     	product:document.getElementById("s2").value,
     	price:document.getElementById("sp2").value
     })
     return items
})
$("#sm3").on("click",function(){
items.push({
     	product:document.getElementById("s3").value,
     	price:document.getElementById("sp3").value
     })
     return items
})
$("#sm4").on("click",function(){
items.push({
     	product:document.getElementById("s4").value,
     	price:document.getElementById("sp4").value
     })
     return items
})
$("#sm5").on("click",function(){
items.push({
     	product:document.getElementById("s5").value,
     	price:document.getElementById("sp5").value
     })
     return items
})
$("#sm6").on("click",function(){
items.push({
     	product:document.getElementById("s6").value,
     	price:document.getElementById("sp6").value
     })
     return items
})
$("#sm7").on("click",function(){
items.push({
     	product:document.getElementById("s7").value,
     	price:document.getElementById("sp7").value
     })
     return items
})
$("#sm8").on("click",function(){
items.push({
     	product:document.getElementById("s8").value,
     	price:document.getElementById("sp8").value
     })
     return items
})
$("#sm9").on("click",function(){
items.push({
     	product:document.getElementById("s9").value,
     	price:document.getElementById("sp9").value
     })
     return items
})
$("#sm10").on("click",function(){
items.push({
     	product:document.getElementById("s10").value,
     	price:document.getElementById("sp10").value
     })
     return items
})

