function gcd(num1, num2){
    if (num1 == 0 || num2 == 0) return num1+num2;
    return num1 > num2 ? gcd(num2 , num1%num2) : gcd(num2, num2%num1);
}