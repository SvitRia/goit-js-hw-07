//Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні.
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотека basicLightbox містить метод для програмного закриття модального вікна.

import { galleryItems } from './gallery-items.js'


const galaryList = document.querySelector(".gallery")
galaryList.addEventListener("click", createFullPicture)


const item = galleryItems.map((  {preview, original, description} ) => `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
<img class="gallery__image" src="${preview}"data-source="${original}" alt="${description}">
</a>
</li>
  `).join("")
galaryList.insertAdjacentHTML("beforeend", item)

let modalInstance;
function createFullPicture(evt) {
    evt.preventDefault();
    if(evt.target === evt.currentTarget) { return} else {   
    evt.target.src = evt.target.dataset.source;
    modalInstance = basicLightbox.create(`<img src='${evt.target.src}' width="800" height="600">`,
    {onShow: (modalInstance) => {window.addEventListener('keydown', closeModal)},
    onClose: (modalInstance) => {window.removeEventListener('keydown', closeModal)},
    }
    );
    
    modalInstance.show() 
    //modalInstance.element.onShow;
    function closeModal(event) {
        if (event.key === 'Escape' && modalInstance) {
          modalInstance.close();
        }
  }
  }}


//     document.addEventListener("keydown", checkKey());
//     function checkKey(event) {if(event.code === "Esc") {return true} else return}
//        console.dir(checkKey());
//    console.dir(instance);
   //instance.addEventListener("keydown", evt => { if(evt.code === "Escape") {instance.close()}})
   //const isEscape = false;
// function takePuschKey(evt) {let isEscape = false;
//     	if (evt.key === "Escape" || evt.key === "Esc" ||  evt.keyCode === 27 || basicLightbox.visible() === true) {
//     instance.close(); }}
// console.log(isEscape);
  
//    {
//     onShow: (instance) => {imstnce.show()},

//     onClose: (instance) => {instance.close()}}
   //{if(evt.key === "Escape" || evt.key === "Esc" ||  evt.keyCode === 27)
 //function closeFullFoto() {
   // if (basicLightbox.visible() === true) {};
// }
// const instance = basicLightbox.create(html, {
//     onShow: (instance) => console.log('onShow', instance),
//     onClose: (instance) => console.log('onClose', instance)
// })
// onShow: (instance) => {
// 	// Close when hitting escape.
// 	document.onkeydown = function(evt) {
// 		evt = evt || window.event;
// 		var isEscape = false;
// 		if ( "key" in evt ) {
// 			isEscape = ( evt.key === "Escape" || evt.key === "Esc" );
// 		} else {
// 			isEscape = ( evt.keyCode === 27 );
// 		}
// 		if ( isEscape ) {
// 			instance.close();
// 		}
// 	};
// }