function count_change_one_dollar(n, array){
    if (array.length == 1) return 1;
    var dollar_last = array.pop();
    var mod =  n%dollar_last;
    var temp = (n - mod)/dollar_last;
    return temp*count_change_one_dollar(dollar_last,array) + count_change_one_dollar(mod, array) ;
}