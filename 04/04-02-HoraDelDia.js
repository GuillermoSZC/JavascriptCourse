let time = 6;
let sentence;

if(Number.isInteger(time))
{
    if(time >= 6 && time <= 11)
    {
        sentence = "Buenos dias.";
    }
    else if(time >= 12 && time <= 18)
    {
        sentence = "Buenas tardes.";
    }
    else if(time >= 19 && time <= 24)
    {
        sentence = "Buenas noches.";
    }
    else if(time >= 0 && time <= 5)
    {
        sentence = "Durmiendo";
    }
    else
    {
        console.log("Number out of range.");
    }
}   
else
{
    console.log("The value entered is not a number.");
}

console.log(sentence);