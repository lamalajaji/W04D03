
const fizBuzz = (n)=>{

    if (n % 3 == 0){
        return ("fizz")
    }
    else if (n % 5 ==0 ){
        return ("Buzz")
    }
    else if (n % 3 == 0 && n % 5 ==0){
        return ("fizzBuzz")
    }
    else{
        for (let i = 1; i <= n; i++) {
            console.log(i);
            
        }
    }
}