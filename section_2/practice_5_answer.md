    function tag_cf(x, k){
    
        console.log("tag_cf");
        return x*tag_b(x,k-1)/tag_a(x, k-1) ;
    }
    
    function tag_a(x,k)
    {
        if (k == 0 || k == -1) return 1;
        return (2*k+1)*tag_a(x,k-1) - x*x*tag_a(x,k-2);
    }
    
    function tag_b(x,k)
    {
        if (k == 0) return 1;
        if (k == -1) return 0;
        return (2*k+1)*tag_b(x,k-1) - x*x*tag_b(x,k-2);
    }
