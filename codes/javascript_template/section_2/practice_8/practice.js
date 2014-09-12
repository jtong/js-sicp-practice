function  slove_iter(check, iterator)
{
    return function(fun,x,dx)
    {
        if (!check(fun,x,dx)) return slove_iter(check, iterator)(fun, iterator(fun,x,dx),dx);
        else return x;
    }
}
