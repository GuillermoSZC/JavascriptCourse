let month = 7;
let station;

switch(month)
{
    case 1: case 2: case 12:
        station = "Winter";
        break;
    case 3: case 4: case 5:
        station = "Spring";
        break;
    case 6: case 7: case 8:
        station = "Summer";
        break;
    case 9: case 10: case 11:
        station = "Autumn";
        break;
    default:
        station = "Incorrect value";
}

console.log(station);