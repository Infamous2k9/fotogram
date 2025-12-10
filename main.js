const images = [
    { src: './assets/img//public/photo-1.jpg', alt: 'alt text photo-1' },
    { src: './assets/img//public/photo-2.jpg', alt: 'alt text photo-2' },
    { src: './assets/img//public/photo-3.jpg', alt: 'alt text photo-3' },
    { src: './assets/img//public/photo-4.jpg', alt: 'alt text photo-4' },
    { src: './assets/img//public/photo-5.jpg', alt: 'alt text photo-5' },
    { src: './assets/img//public/photo-6.jpg', alt: 'alt text photo-6' },
    { src: './assets/img//public/photo-7.jpg', alt: 'alt text photo-7' },
    { src: './assets/img//public/photo-8.jpg', alt: 'alt text photo-8' },
    { src: './assets/img//public/photo-9.jpg', alt: 'alt text photo-9' },
    { src: './assets/img//public/photo-10.jpg', alt: 'alt text photo-10' },

];

const imgList = document.querySelector('*[data-img-list]');
const dialog = document.querySelector('#lightbox');
const dialogClose = document.getElementById('closeDialogBtn');
const dialogImg = document.getElementById('dialogImg');
const currentImg = document.getElementById('currentImg');

function openDialog(index) {
    dialogImg.setAttribute("src", `${images[index].src}`);
    dialogImg.setAttribute("alt", `${images[index].alt}`);
    currentImg.innerHTML = `${index+1} / ${images.length}`
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}

function createImagesList() {

    imgList.innerHTML = `
        ${images.map((item)=>(  
        `
            <li>
                <img src='${item.src}' alt='${item.alt}' data-itemImage class="itemImage">
            </li>
        `
        )).join('')}
    `
    let itemImg = document.querySelectorAll('*[data-itemImage]');
    itemImg.forEach(function(img, index){
        img.setAttribute('onClick', `openDialog(${index})`);
    });
}

function render() {
    createImagesList();
}