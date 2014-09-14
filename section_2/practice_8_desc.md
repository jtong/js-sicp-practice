练习6的是通过微分进行迭代查找方程解的，这道题我们通过传入检验过程和逼近过程，得到返回的函数过程来解决解方程的问题。
    
    slove_iter(check, buzz)
    
其中：
check是检验计算结果是否符合逼近要求的函数，譬如计算结果为X',要计算fun(x)，逼近要求是dx，函数check则为：
    
    function check (fun, x, dx)
    {
         if (dx > Math.abs(fun(x))) return true;
         return false;
    }
        
buzz是进行逼近的过程函数，函数如下：
    
    function buzz (fun, x,dx)｛return next_x;｝
    
当check返回false的时候对x进行再次逼近，buzz返回next_x，将next_x作为下一个逼近值检验，直到符合check的检验要求    

slove_iter的返回值是一个通过check检验buzz的逼近过程的函数，
    
    return function(fun,x,dx){};

其中fun为一个函数， 
x是输入的一个用来逼近起始点，我们可以理解他是我们认为接近正确解的值，
dx是fun(X')－0的误差值，这个误差值小于dx我们认为X'是符合我们逼近要求的近似解
    
其中调用方法如下：
   
    slove_iter(check,buzz)(function(x){return x*x*x  - 3},5,0.001)
    
    


