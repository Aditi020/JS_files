function leap(yr)
{
    if (yr%4==0 && yr&100!=0)
    return 1;
    else
    {
        if (yr%400==0)
        return 1;
        else
        return 0;
    }
}
if(leap(2100)==1)
console.log("leap year")
else
console.log("not leap yr")