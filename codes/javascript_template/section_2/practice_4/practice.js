function filtered_accumulate(filter, combiner, null_value, term, a, next, b)
{
    if (a > b) return null_value;
    return combiner(term(a), filtered_accumulate(filter, combiner,null_value,term,next(a),next,b));
}