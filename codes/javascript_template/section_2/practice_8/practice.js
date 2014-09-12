function  slove_iter(check, iterator , fun, x)
{
    if (!check(fun,x)) return slove_iter(check, iterator, fun, iterator(fun,x));
    else return x;
}
