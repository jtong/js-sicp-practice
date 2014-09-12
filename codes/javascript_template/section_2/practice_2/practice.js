function product(term, a, next, b){
//这里添加代码
    if (a > b) return 1;
    return term(a)*product(term,next(a),next,b);
}