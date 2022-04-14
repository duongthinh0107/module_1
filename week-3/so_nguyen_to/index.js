// let input = parseInt(prompt());
//cho so nhap lon hon 1
function checkNT(n){

    let check = true;
//mac dinh cho  la so nguyen to
//tao birn check roi lap
    for (let i = 2; i <= Math.sqrt(n);i++){
        if(n%i==0){
            check = false;
            // console.log('n k phai la so nguyen to')
            break;
        }
    }return check;
}
function print(){
    let x = 1;
    let i = 0;
    while(true){
        x++;
        if(checkNT(x)){
            document.writeln(x)
            i++
        }
        if (i==10000){
            break;
        }
    }
}
ie