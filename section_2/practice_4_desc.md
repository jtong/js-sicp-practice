写一个filtered-accumulate,表现更加通用的能力。调用的方式形如：

    filtered-accumulate(filter, combiner, null_value, term, a, next, b);
    
在计算的过程只计算符合特定规则的项，然后作combiner运算，例如

1到100之间的偶数，然后计算sum和product。

filter是来返回数字是否复合规则，如果符合规则则返回true，不符合规则则返回false，例如

    if (x％2 == 0) return true; 
    else return false;

