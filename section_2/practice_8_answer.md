    function  solve_iter(check, buzz)
    {
        return function(fun,x,dx)
        {
            if (!check(fun,x,dx)) return solve_iter(check, buzz)(fun, buzz(fun,x,dx),dx);
            else return x;
        }
    }
    