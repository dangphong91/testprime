let max = Number(prompt("Nhập giới hạn max của số nguyên tố:"));
function isPrime(number) {
    let test = true;
    if (number<=1) {
        test = false;
    } else {
        for(let i = 2; i <= number/2; i++) {
            if (number%i == 0) {
                test = false;
                break;
            }
        }
    }
    return test;
}
let x = 2;
function display(max) {
    for(let j = 1; j <= max;) {
        if(isPrime(x)) {
            document.write(`${x} ;`);
            j++;
        }
        x++;
    }
}
display(max);