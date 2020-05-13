function increaser(a, index) {
    if (a > index) {
        a += index;
    } else {
        a = a;
    }
    return a;
}

//console.log(increaser(10,5))