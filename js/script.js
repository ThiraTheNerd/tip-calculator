jQuery('h1').click(function(){
  alert("THis is a heading")
})
$('button').click(function(event){
  var date = document.forms["dateForm"]["dateBirth"].value;
  var female = document.forms["dateForm"]["female"].checked;
  var male = document.forms["dateForm"]["male"].checked;
  var actualDay = new Date(date);
  var day = actualDay.getDay();
  var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
  var maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
  var femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
  console.log(date);
  console.log(date[2]);
  console.log(actualDay);
  console.log(day);
  event.preventDefault();

  if(male){
    console.log(`Your Akan name is ${maleNames[day]} you were born on a ${dayNames[day]}`);
  }else if(female){
    console.log(`Your Akan name is ${femaleNames[day]} you were born on a ${dayNames[day]}`);   
  }else{
    console.log('Ensure you have filled in all inputs')
  }
})