function playAGame()
{

    var random1 = Math.ceil(Math.random()*6);
    var random2 = Math.ceil(Math.random()*6);

    document.getElementById("rand1").innerHTML = "1st random num = " + random1;
    document.getElementById("rand2").innerHTML = "1st random num = " + random2;
   
    var sum = random1+random2;

    if ((sum == 7) || (sum = 11))
    {
        document.getElementById("result").innerHTML = "CRAPS-you lose!";
    }
  else if  ((random1 = random2) && (random1%2 == 0))

    {
        document.getElementById("result").innerHTML = "You Won!";
    }
    else 
    {
        document.getElementById("result").innerHTML = "You pushed!";
    }

}