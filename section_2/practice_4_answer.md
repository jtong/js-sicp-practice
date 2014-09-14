    function filtered_accumulate(filter, combiner, null_value, term, a, next, b)
    {
        if (filter_current_and_next_a(filter, next, a) > b) return null_value;
        return combiner(term(filter_current_and_next_a(filter, next, a)),
            filtered_accumulate(filter,combiner,null_value,term,next(filter_current_and_next_a(filter ,next , a)),next,b));
    }
    
    function filter_current_and_next_a(filter ,next , a)
    {
        if (filter(a))  return a;
        return filter_current_and_next_a(filter, next, next(a))
    }
    
