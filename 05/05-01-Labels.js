const x = [0,1,2,3,4,5,6];

label:

for(let num of x)
{
    if(num % 2 == 0)
    {
        continue label;
    }

    console.log(num);
}