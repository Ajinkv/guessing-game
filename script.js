//selecting Id
var inputbox = document.getElementById("inputbox")
var result = document.getElementById("result")
var guesscount =document.getElementById("guesscount")
var noofguess = 3

var randomnumber =Math.floor(Math.random()*10)+1



function checkthenumber()
{
if(inputbox.value == randomnumber)
{
    alert("you got it Right, congratulaion..")
    result.textContent ="You are right !"

}
else{
    noofguess=noofguess-1
    if(noofguess==0)
    {
        alert("you lost,Generated randomnumber is:"+randomnumber)
    }
    guesscount.textContent = "Available Guesses:"+noofguess
    result.textContent ="You are Wrong !"
}


}