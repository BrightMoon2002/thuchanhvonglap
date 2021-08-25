function checkprime(n) {
    let check;
    check = 1;
    for (let i =2; i <= n; i++) {
        if (n % i === 0 && n > 2) {
            check = 0;
        }
    }
    return check;
}
function ibputPrime(n) {
    let i = 2;
    count = 0;
    let text = "";
    while (count < n) {
        if (checkprime(i) === 1) {
            text += i + "&nbsp;";
            count++;
        }
        i++
    }
    return text;
}