
sum和product都是另一种成为accumulate的特殊情况而已。

accumulate使用某些更一般性的函数组合起更强大的功能,调用代码形如：

    accumulate(combiner, null_value, term, a, next, b);
    
accumulate使用的是与sum和product一样的参数项和范围描述参数，再加上一个（两个参数的）combiner函数和一个null_value参数。其中：

- combiner是描述如何将当前项与前面项的积累结果组合起来
- null_value是描述所有项用完时的基本值, 譬如 
    
    if (n==0) return 1;
    
 请实现accumulate函数，使可以用accumulate函数完成sum和production

