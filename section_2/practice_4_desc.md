写一个filtered-accumulate,表现更加通用的能力。调用的方式形如：

    filtered-accumulate(filter, combiner, null_value, term, a, next, b);
但返回的是一个数组。 比如返回1到100之间的偶数。 同时filter也可以计算sum和product，只是返回的是只有一个值的数组。这个值就是sum和product的结果值

参见SICP P40 练习1.33
