function palindrome(str) {

    str = str.toUpperCase();
    str = str.replace(/[^0-9A-Z]/g, '');

    for (let i =0; i<Math.floor(str.length/2); i++){
        if(str[i]!==str[str.length-1-i]){
            return false;
        }
    }

    return true;
}

palindrome("1 eye for of 1 eye.");
palindrome("_eye");
palindrome("race car");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even") ;
palindrome("My age is 0, 0 si ega ym.") ;
palindrome("0_0 (: /- :) 0-0");