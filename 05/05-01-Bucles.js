let cont = 0;

// While
while(cont < 3)
{
    ++cont;
}

let cont2 = 0;

// Do while
do 
{
    ++cont2;
} 
while (cont2 < 3);

// For

for(let i = 0; i < 10; ++i)
{
    console.log(i);

    if(i >= 5)
    {
        break;
    }
    console.log(i);
}   

// For iterator
const iter = "Buenas";

for(const char of iter)
{
    if(char == "e")
    {
        continue;
    }
    else
    {
        console.log(char);
    }
}