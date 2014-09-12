写一个filtered-accumulate,表现更加通用的能力。调用的方式形如：

    filtered-accumulate(combiner, null_value, term, a, next, b);
    
在计算的过程只计算符合特定规则的项，然后作combiner运算，例如
返回1到100之间的偶数，计算sum和product。
同时filter也可以计算sum和product，只是返回的是只有一个值的数组。这个值就是sum和product的结果值

参见SICP P40 练习1.33