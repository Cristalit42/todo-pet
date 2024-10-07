'use strict'


// Сделал добавление новых элементов, и базовый функционал редактирования.
// Завтра надо:
// 1) добавить унифицирование для айтемов
// 2) доаботать функционал редактирвоания, в зависимости от айдишника айтема
// 3) Добавить удаление айтема
// 4) Реализовать localstorage, для хранения айтемов
// 5) Реализовать добавление атрибута checked к айтемам, с последующим запоминанием и хранением

function textEdit(editBtn, elementText) {
  editBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let textInput = prompt("Введите текст (пробный вариант)");
    console.log(textInput);

    if (textInput) {
      editBtn.closest('.element').querySelector('.element-text').innerHTML = textInput;
    } else {
      editBtn.closest('.element').querySelector('.element-text').innerHTML = elementText;
    }
  });
}

function addItem() {
  let addBtn = document.querySelector('.element-add'),
    elementList = document.querySelector('.element-list'),
    itemID = 1;

  addBtn.addEventListener('click', function (event) {
    event.preventDefault();

    let newItem = document.createElement('div');

    newItem.classList.add('element');
    newItem.setAttribute('id', `element-${itemID}`);
    newItem.innerHTML =
      `<label class="label-container">
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <p class="element-text">
          New item
        </p>
        <a class="element-edit" href="#">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_51_286)">
              <path d="M1.04431 19.4465L0 25L5.55363 23.9557L20.5777 8.93169L16.0683 4.42236L1.04431 19.4465ZM4.95619 22.8237L1.53259 23.4674L2.17635 20.0438L16.0683 6.15185L18.8482 8.93169L4.95619 22.8237Z" fill="black" />
              <path d="M20.491 0L17.1069 3.38405L21.6162 7.89329L25.0002 4.50924L20.491 0ZM18.8364 3.38405L20.491 1.72949L23.2707 4.50924L21.6162 6.1638L18.8364 3.38405Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_51_286">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>`;
    ++itemID;
    console.log(itemID);

    elementList.appendChild(newItem);

    let editBtn = newItem.querySelector('.element-edit');
    let elementText = newItem.querySelector('.element-text').innerHTML.trim();
    textEdit(editBtn, elementText);
  });
}

let existingElements = document.querySelectorAll('.element');
existingElements.forEach(function(element) {
  let editBtn = element.querySelector('.element-edit');
  let elementText = element.querySelector('.element-text').innerHTML.trim();
  textEdit(editBtn, elementText);
});

addItem();

// чуток переписал, теперь можно созданные элементы редактировать