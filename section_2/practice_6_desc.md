牛顿法逼近函数f(x) = 0的一个数值解，其中x的定义域实数全部。
 
    solve(fun, x, dx)

solve返回result,result是正确解的近似值
其中fun为f(x)这个函数， 
x是输入的一个用来逼近起始点，我们可以理解他是我们认为接近正确解的值，
dx是fun(result)－0的误差值，这个误差值小于dx我们认为result是符合我们逼近要求的近似解。
逼近的具体方法，伪代码如下：

    diff(x) ＝ (fun(x+dx)-fun(x))/dx;
    next_x = x -  fun(x)/diff(x)
    
next_x是我们进行逼近后的一个值，diff是运算中产生的一个数值，他约等于函数在x点的斜率，数学中我们称他为导数。next_x实际上是在函数x点上做切线，这条切线与x轴的焦点。    

