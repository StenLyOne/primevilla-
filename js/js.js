AOS.init();

const burgerMenu = document.querySelectorAll('.menu-btn-container')
const burgerMenuActiv = document.querySelectorAll('.burgermenu-activ')
const menuBtn = document.querySelectorAll('.menu-btn')
const body = document.body;
const href = document.querySelectorAll('ul h3')
const natureBg = document.querySelector('.nature-bg')

burgerMenu.forEach(elemm => {
    elemm.addEventListener('click', function () {
        burgerMenuActiv.forEach(menu => {
            menu.classList.toggle('activ');
        });

        body.classList.toggle('body-overlow');
        natureBg.classList.toggle('natureBg-overlow');

        menuBtn.forEach(elem => {
            elem.classList.toggle('activ1');
        });
    });
}); 

href.forEach(elem => {
    elem.addEventListener('click', function() {
        burgerMenuActiv.forEach(menu => {
            menu.classList.remove('activ');
        });

        body.classList.remove('body-overlow');
        natureBg.classList.remove('natureBg-overlow');

        menuBtn.forEach(btn => {
            btn.classList.remove('activ1');
        });
    });
});









////////////////////////// P PC

function textAdd1 () {

    const text = '"Architecture is more than mere building; it is a creation that marries art and functionality. Forms and spaces find meaning in light, crafting a harmony where people can live, work, and delight."';

    const blockOneText = document.querySelector('.block-one-text-');
    let text1 = '';

    const textAdd = (i) => {
        setTimeout(() => {
            text1 += text[i];
            
            // Создание нового элемента <p>
            const p = document.createElement('p');
            p.textContent = text1;
            p.classList.add('italic'); // Присвоение класса .italic
            
            // Очистка содержимого контейнера
            blockOneText.innerHTML = '';
            
            // Добавление нового элемента <p> в контейнер
            blockOneText.appendChild(p);
        }, 20 * i);
    };

    for (let i = 0; i < text.length; i++) {
        textAdd(i);
    }

}

setTimeout(textAdd1,1400)



function textAddName1 () {
    const textName = 'Le Corbusier';

    const blockOneTextName = document.querySelector('.block-one-text-name');
    let text1Name = '';
    
    const textAddName = (i) => {
        setTimeout(() => {
            text1Name += textName[i];
            
            // Создание нового элемента <p>
            const h3 = document.createElement('h3');
            h3.textContent = text1Name;
            // h3.classList.add('italic');
            
            // Очистка содержимого контейнера
            blockOneTextName.innerHTML = '';
            
            // Добавление нового элемента <p> в контейнер
            blockOneTextName.appendChild(h3);
        }, 60 * i);
    };
    
    for (let i = 0; i < textName.length; i++) {
        textAddName(i);
    } 
}



setTimeout(textAddName1,500)


//////////////////////// P MOB 

function textAddMob1 () {
    const textMob = '"Architecture is more than mere building; it is a creation that marries art and functionality. Forms and spaces find meaning in light, crafting a harmony where people can live, work, and delight."';

    const blockOneTextMob = document.querySelector('.main-p-mob');
    let text1Mob = '';

    const textAddMob = (i) => {
        setTimeout(() => {
            text1Mob += textMob[i];
            
            // Создание нового элемента <p>
            const p = document.createElement('p');
            p.textContent = text1Mob;
            p.classList.add('italic-mob'); // Присвоение класса .italic
            
            // Очистка содержимого контейнера
            blockOneTextMob.innerHTML = '';
            
            // Добавление нового элемента <p> в контейнер
            blockOneTextMob.appendChild(p);
        }, 20 * i);
    };

    for (let i = 0; i < textMob.length; i++) {
        textAddMob(i);
    }
}

setTimeout(textAddMob1,500)


function textAddMob2Set () {
    const textMob2 = 'Le Corbusier'

const blockOneTextMob2 = document.querySelector('.main-p-mob-name');
let text1Mob2 = '';

const textAddMob2 = (i) => {
    setTimeout(() => {
        text1Mob2 += textMob2[i];
        
        // Создание нового элемента <p>
        const p = document.createElement('p');
        p.textContent = text1Mob2;
        p.classList.add('italic-mob'); // Присвоение класса .italic
        
        // Очистка содержимого контейнера
        blockOneTextMob2.innerHTML = '';
        
        // Добавление нового элемента <p> в контейнер
        blockOneTextMob2.appendChild(p);
    }, 90 * i);
};

for (let i = 0; i < textMob2.length; i++) {
    textAddMob2(i);
}
}


setTimeout(textAddMob2Set,4600)







setInterval(() => {
    const nature1 = document.querySelector('.nature-1');
    
    nature1.classList.toggle('nature-z1');
        
}, 5000)


setTimeout(() => {
    setInterval(() => {
        const nature2 = document.querySelector('.nature-2');
        nature2.classList.toggle('nature-z2');
    }, 5000);
}, 5500);


setInterval(() => {
    const nature1 = document.querySelector('.nature-3');
    
    nature1.classList.toggle('nature-z3');
        
}, 5000)


setTimeout(() => {
    setInterval(() => {
        const nature2 = document.querySelector('.nature-4');
        nature2.classList.toggle('nature-z4');
    }, 5000);
}, 5500);






const does1 = document.querySelectorAll('.does1');
const does2 = document.querySelectorAll('.does2');

const hammer01 = new Hammer(does1[0]);
const hammer02 = new Hammer(does2[0]);
const hammer11 = new Hammer(does1[1]);
const hammer12 = new Hammer(does2[1]);
const hammer21 = new Hammer(does1[2]);
const hammer22 = new Hammer(does2[2]);


function does01() {
    does2[0].classList.add('does-hidden');
    does1[0].classList.remove('does-hidden');
}

hammer01.on('swiperight', function(event) {
    does2[0].classList.add('does-hidden');
    does1[0].classList.remove('does-hidden');
});

function does02() {
    does1[0].classList.add('does-hidden');
    does2[0].classList.remove('does-hidden');
}

hammer02.on('swipeleft', function(event) {
    does1[0].classList.add('does-hidden');
    does2[0].classList.remove('does-hidden');
});

function does03() {
    does2[1].classList.add('does-hidden');
    does1[1].classList.remove('does-hidden');
}

hammer11.on('swiperight', function(event) {
    does2[1].classList.add('does-hidden');
    does1[1].classList.remove('does-hidden');
});

function does04() {
    does1[1].classList.add('does-hidden');
    does2[1].classList.remove('does-hidden');
}

hammer12.on('swipeleft', function(event) {
    does1[1].classList.add('does-hidden');
    does2[1].classList.remove('does-hidden');
});

function does05() {
    does2[2].classList.add('does-hidden');
    does1[2].classList.remove('does-hidden');
}

hammer21.on('swiperight', function(event) {
    does2[2].classList.add('does-hidden');
    does1[2].classList.remove('does-hidden');
});

function does06() {
    does1[2].classList.add('does-hidden');
    does2[2].classList.remove('does-hidden');
}

hammer22.on('swipeleft', function(event) {
    does1[2].classList.add('does-hidden');
    does2[2].classList.remove('does-hidden');
});










function isValidEmail(email) {
    // Регулярное выражение для проверки корректности email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function isValidPhone(phone) {
    // Регулярное выражение для проверки корректности номера телефона (простой пример)
    const phoneRegex = /^\d{5,}$/; // Не менее 5 цифр
    return phoneRegex.test(phone);
}

const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function () {
    // Удаление всех символов, кроме цифр
    const sanitizedValue = this.value.replace(/\D/g, '');

    // Обрезка до 5 цифр
    const truncatedValue = sanitizedValue.substring(0, 15);

    // Присвоение очищенного значения полю
    this.value = truncatedValue;
});

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const labelName = document.getElementById('labelName')
    const labelEmail = document.getElementById('labelEmail')
    const labelPhone = document.getElementById('labelPhone')




function send() {
        const nameValue = nameInput.value;
        const emailValue = emailInput.value;
        const phoneValue = phoneInput.value;
    
        // Проверка наличия значения в каждом из инпутов
        if (!nameValue && !emailValue && !phoneValue) {
            emailInput.style.borderColor = 'red';
            phoneInput.style.borderColor = 'red';
            nameInput.style.borderColor = 'red';
            labelName.style.color = 'red';
            labelEmail.style.color = 'red';
            labelPhone.style.color = 'red';
            return;
        }
    
        // Проверка пустого значения nameInput
        if (nameValue === '') {
            nameInput.style.borderColor = 'red';
            labelName.style.color = 'red';
        } else {
            nameInput.style.borderColor = '#D5FF40';
            labelName.style.color = '#D5FF40';
        }
    
        // Проверка корректности email
        if (!isValidEmail(emailValue)) {
            emailInput.style.borderColor = 'red';
            labelEmail.style.color = 'red';
        } else {
            // Если nameInput не пустое и emailInput содержит действительный email,
            // устанавливаем зеленый цвет для emailInput и его метки
            if (nameValue !== '') {
                emailInput.style.borderColor = '#D5FF40';
                labelEmail.style.color = '#D5FF40';
            }
        }
    
        // Проверка корректности номера телефона
        if (!isValidPhone(phoneValue)) {
            phoneInput.style.borderColor = 'red';
            labelPhone.style.color = 'red';
        } else {
            phoneInput.style.borderColor = '#D5FF40';
            labelPhone.style.color = '#D5FF40';
        }

        if (nameValue && emailValue && phoneValue && isValidEmail(emailValue) && isValidPhone(phoneValue)) {
            sendadd()
        }

    
}


function sendadd () {
    const success = document.querySelector('.success')
    const bg = document.querySelector('.bg')

    bg.classList.add('bg-activ')
    success.style.display = 'flex'
    body.classList.add('body-overlow');
    nameInput.value = ''
    emailInput.value = ''
    phoneInput.value = ''
}
    
function sendClosed() {
    const success = document.querySelector('.success')
    const bg = document.querySelector('.bg')
    
    bg.classList.remove('bg-activ')
    success.style.display = 'none'
    body.classList.remove('body-overlow');
}









function sizeDoes2 () {
    var doees1 = document.querySelector('.does1');
var does1Height = doees1.offsetHeight;
var does1Styles = window.getComputedStyle(doees1);
var does1PaddingTop = parseInt(does1Styles.paddingTop);
var does1PaddingBottom = parseInt(does1Styles.paddingBottom);
var does1MarginBottom = parseInt(does1Styles.marginBottom);

var does1TotalHeight = (does1Height + does1PaddingTop + does1PaddingBottom) -does1MarginBottom;
var does2Elements = document.querySelectorAll('.does2');

does2Elements.forEach(function(element) {
    element.style.height = does1TotalHeight + 'px';
});
}



setTimeout(sizeDoes2,1000)



let nextIndex = 0


let intervalId



const slider = document.querySelectorAll('.main');

slider.forEach(elem =>{
    const mc= new Hammer(elem);
    mc.on('swipeleft', function() {
        // Обработка свайпа влево
        clearInterval(intervalId);
        nextMain();
        intervalId = setInterval(nextMain, 10000);
    });
})


slider.forEach((elem, index) => {
    const mc = new Hammer(elem);
    
    mc.on('swiperight', function() {
        clearInterval(intervalId);
        prevMain(index);
        intervalId = setInterval(nextMain, 10000);
    });
});

function nextMain() {
    
    const main = document.querySelectorAll('.main');
    nextIndex ++
    
    main.forEach((elem) => {
        const mainActiv = elem.classList.contains('main-activ');
        
        if (mainActiv) {
            elem.classList.remove('main-activ');
            main[nextIndex].classList.add('main-activ');
            nextIndex + 1    
        }
        
        if (nextIndex === 3) {
            nextIndex = 0
        }
    });
}

function prevMain(index) {
    const main = document.querySelectorAll('.main');
    index -= 1
    main.forEach((elem) => {
        const mainActiv = elem.classList.contains('main-activ');

        if (index < 0) {
            index = main.length - 1;
        }

        if (mainActiv) {
            elem.classList.remove('main-activ');
            main[index].classList.add('main-activ');
            
        }
    });
}



intervalId = setInterval(nextMain, 7000);

    // Функция для остановки текущего интервала и запуска nextMain по клику на кнопку
    function handleButtonClick() {
        // Остановить текущий интервал
        clearInterval(intervalId);

        // Вызвать nextMain
        nextMain();

        // Установить новый интервал
        intervalId = setInterval(nextMain, 7000);
}

