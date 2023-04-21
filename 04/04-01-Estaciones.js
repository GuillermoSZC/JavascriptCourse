let month = 12;
let station;

if(Number.isInteger(month))
{
    if(month >= Math.min(1, 2) && month <= Math.max(1, 2)|| month == 12)
    {
        station = "Winter";
    }
    else if(month >= Math.min(3, 5) && month <= Math.max(3, 5))
    {
        station = "Spring";
    }
    else if(month >= Math.min(6, 8) && month <= Math.max(6, 8))
    {
        station = "Summer";
    }
    else if(month >= Math.min(9, 11) && month <= Math.max(9, 11))
    {
        station = "Autumn";
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

console.log(station);
