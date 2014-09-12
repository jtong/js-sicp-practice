    function product(term, a, next, b){
        if (a > b) return 1;
        return term(a)*product(term,next(a),next,b);
    }
    