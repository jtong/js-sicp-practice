function slove(fun, iterator , x, dx)
{
    if (dx > Math.abs(fun(x))) return x;
    return slove(fun, iterator, iterator(x),dx);
}
