    function pascal_triangle(n){
        var pascal_array = pascal_triangle_array(n);
        return array_2_string(pascal_array);
    }
    
    function pascal_triangle_array(n)
    {
        var pascal_array = [];
        for (var i = 0; i != n; i++)
        {
            var pascal_row = [];
            for (var m = 0; m != i+1; m++)
            {
                pascal_row.push(pascal_triangle_element(i,m));
            }
            pascal_array.push(pascal_row);
        }
        return pascal_array;
    }
    
    function pascal_triangle_element(n,m)
    {
        return factorial(n)/(factorial(m)*factorial(n-m));
    }
    
    function factorial(n){
        if (n == 1 || n == 0) return 1;
        return n*factorial(n-1);
    }
    
    function array_2_string(array)
    {
        var str_array = "";
        for (var n = 0; n != array.length; n++)
        {
            for(var m = 0; m !=  array[n].length; m++)
            {
                str_array += array[n][m].toString();
                if (m != array[n].length-1) str_array += " ";
            }
            str_array += "\n";
        }
        return str_array;
    }
    