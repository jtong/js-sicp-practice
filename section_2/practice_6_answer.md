    function slove(fun, x, dx){
        if (dx > Math.abs(fun(x))) return x;
        return slove(fun, x -  fun(x)/diff(fun,x,dx), dx);
    }
    
    function diff (fun,x,dx)
    {
        return (fun(x+dx)-fun(x))/dx;
    }
