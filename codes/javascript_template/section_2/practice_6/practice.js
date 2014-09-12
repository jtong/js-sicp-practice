function slove(fun, dx){
    var x = Math.floor(Math.random()*10);

    console.log("slove + ",x);
    while (dx < fun(x))
    {
        x = x -  fun(x)/diff(fun,x,dx);
    }
    console.log("result is "+x);
    return x;
}

function diff (fun,x,dx)
{
    console.log("fun(x+dx) "+fun(x+dx));
    console.log("fun(x) "+fun(x));
    console.log("dx "+dx);
    return (fun(x+dx)-fun(x))/dx;
}
