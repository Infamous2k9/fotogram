let imgList = document.querySelector('*[data-img-list]')

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


function createImagesList() {

    imgList.innerHTML = `
        ${images.map((item)=>(
            `
            <li>
                <img src='${item.src}' alt='${item.alt}' class="itemImage">
            </li>
            `
        )).join('')}
    `
}



createImagesList();