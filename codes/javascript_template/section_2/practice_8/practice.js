function  slove_iter(check, buzz)
{
    console.log("slove_iter");
    return function(fun,x,dx)
    {
        console.log("function ",x,dx);
        if (!check(fun,x,dx)) return slove_iter(check, buzz)(fun, buzz(fun,x,dx),dx);
        else return x;
    }
}
