const images = [
    { name: 'photo-1', src: './assets/img//public/photo-1.jpg', alt: 'alt text photo-1' },
    { name: 'photo-2', src: './assets/img//public/photo-2.jpg', alt: 'alt text photo-2' },
    { name: 'photo-3', src: './assets/img//public/photo-3.jpg', alt: 'alt text photo-3' },
    { name: 'photo-4', src: './assets/img//public/photo-4.jpg', alt: 'alt text photo-4' },
    { name: 'photo-5', src: './assets/img//public/photo-5.jpg', alt: 'alt text photo-5' },
    { name: 'photo-6', src: './assets/img//public/photo-6.jpg', alt: 'alt text photo-6' },
    { name: 'photo-7', src: './assets/img//public/photo-7.jpg', alt: 'alt text photo-7' },
    { name: 'photo-8', src: './assets/img//public/photo-8.jpg', alt: 'alt text photo-8' },
    { name: 'photo-9', src: './assets/img//public/photo-9.jpg', alt: 'alt text photo-9' },
    { name: 'photo-1', src: './assets/img//public/photo-10.jpg', alt: 'alt text photo-10' },

];

const imgList = document.querySelector('*[data-img-list]');
const dialog = document.querySelector('#lightbox');
const dialogClose = document.getElementById('closeDialogBtn');
const dialogImg = document.getElementById('dialogImg');
const currentImg = document.getElementById('currentImg');
const nextBtn = document.getElementById('nextBtn');
const previousBtn = document.getElementById('previousBtn');
const currentHeadText = document.getElementById('imageName');

function nextImage() {
    let currentIndex = parseInt(currentImg.getAttribute('value'));
    let nextIndex = currentIndex + 1;


    if (nextIndex == images.length) {
        nextIndex = 0;
        updateImg(nextIndex);
    } else {
        updateImg(nextIndex);
    }
}

function previousImage() {
    let currentIndex = parseInt(currentImg.getAttribute('value'));
    let previousIndex = currentIndex - 1;


    if (previousIndex < 0) {
        previousIndex = images.length - 1;
        updateImg(previousIndex);
    } else {
        updateImg(previousIndex);
    }
}

function updateImg(index) {
    dialogImg.setAttribute("src", `${images[index].src}`);
    dialogImg.setAttribute("alt", `${images[index].alt}`);
    currentImg.setAttribute('value', `${index}`);
    currentImg.innerHTML = `${index+1} / ${images.length}`
    currentHeadText.innerHTML = images[index].name;
}


function openDialog(index) {
    updateImg(index);
    previousBtn.setAttribute('onClick', 'previousImage()');
    nextBtn.setAttribute('onClick', 'nextImage()')
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
                <img src='${item.src}' alt='${item.alt}' data-itemImage class="itemImage" aria-label="Bild in großer Darstellung anzeigen">
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

    if (dialog) {
        dialog.addEventListener('click', (event) => {
            if (event.target === dialog) {
                closeDialog();
            }
        });
        dialog.addEventListener('keydown', (event) =>{
            const key = event.key;
            switch (key) {
                case "ArrowLeft":
                    previousImage();
                    break;
                case "ArrowRight":
                    nextImage();
                    break;
                case "Escape":
                    closeDialog();
                    break;
                default:
                    break;
            }
        })
    }
}