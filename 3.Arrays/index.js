var fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;
for (var i = 2; i < 19; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
for (var i = 0; i < 19; i++) {
    console.log(fibonacci[i]);
}
