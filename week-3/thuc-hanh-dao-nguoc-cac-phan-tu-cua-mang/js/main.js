let arr = [1, 6, 5, 4];
let temp;
let length = arr.length;
for (let i = 0; i < length / 2; i++) {
    temp = arr[(length - 1) - i];
    arr[(length - 1) - i] = arr[i];
    arr[i] = temp;
}
console.log(arr);