    
    function count_change(amount){
    
        return cc(amount, 5);
    }
    
    function cc(amount, kind_of_coins) {
        if(amount == 0){
            return 1;
        }else if(amount < 0||kind_of_coins == 0){
            return 0
        }else{
            return cc(amount, kind_of_coins - 1) + cc(amount-first_denomination(kind_of_coins), kind_of_coins)
        }
    
    
    }
    function first_denomination(kind_of_coins){
        if(kind_of_coins == 1){
            return 1;
        }else if(kind_of_coins == 2){
            return 5;
        }else if(kind_of_coins == 3){
            return 10;
        }else if(kind_of_coins == 4){
            return 25;
        }else if(kind_of_coins == 5){
            return 50;
        }
    }