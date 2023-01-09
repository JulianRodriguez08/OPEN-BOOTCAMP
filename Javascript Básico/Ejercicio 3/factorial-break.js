let i = 1;
let factorial = 1; 

while (true) {
    factorial *= i;
    i++;
    console.log(factorial);

    if (i === 11) {
        break;
    }
}

console.log(factorial);