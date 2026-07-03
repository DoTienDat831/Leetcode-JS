let x = 121;
let y = 0;

while (x != 0) {
    console.log(x % 10);
    y = y * 10 + (x % 10);
    x = (x - (x % 10)) / 10;
    console.log(y)
}