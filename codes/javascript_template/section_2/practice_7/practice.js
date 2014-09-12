function compose(f, g){
    return function(x) {
        f(g(x));
    }
}


