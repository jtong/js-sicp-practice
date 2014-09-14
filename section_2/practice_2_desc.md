
sum是可以用高阶函数表示的大量类似抽象中最简单的一个。我们这节要求写出一个product函数。

product函数接受三个参数a,b和两个函数。product用于计算给定范围（a到b）的某个函数值的乘积。

比如2～6之间每个数的3倍积

2*3 * 3*3 * 4*3 * 5*3 * 6*3

product的调用场景形如：

    product(term, a, next, b);

试用product函数实现阶乘

