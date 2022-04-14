let imageArray = ['black','cap','iron'];//tao mang chua cac folder anh
let images = document.getElementsByClassName('image');//get den img
for(let i = 0; i < images.length; i++){//lap qua tung anh
    let j = Math.floor(Math.random()*imageArray.length); //ham random anh
    images[i].src =  'img/'  + imageArray[j] + '/'+ i + '.jpg';//duong link doi anh
    images[i].addEventListener('click',click);//gan event

    function click(){
        let c = Math.floor(Math.random()*imageArray.length);//click random anh
        this.src = 'img/'  + imageArray[c] + '/'+ i + '.jpg';//link thay doi anh
        //set check neu tat ca cac anh giong nhau thi lam gi do
        let a = 4;
        for(let i = 0; i < images.length; i++){//lap qua tung anh
            let fullPath= images[i].src;//lay src cua img
            let folder = fullPath.split('/')[6];// convert string thanh mang string voi dau phan cach la /, sau đó lấy phần tử ở vị trí thứ 6 trong mảng đã đc convert
            if (folder !== imageArray[c]) {
                a -= 1;
            }
        }
        if (a === 4) {
            setTimeout(()=> {
                alert("chu mung")
            },100)

        }


    }
}
