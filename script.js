const fullPhoto = document.querySelector('.main_image_style');
const thumbnails = document.querySelectorAll('.down_image_style');

for(let i = 0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener('click', function(){
        fullPhoto.src = thumbnails[i].src;
    });
}

const buttonShowModal = document.getElementById("buyId");
const modal = document.getElementById("buyMasterId");
const buttonCloseModal = document.getElementById("modalcloseId");
const modalWindow = document.getElementById("modelId");

buttonShowModal.addEventListener("click",function(evt){
    evt.preventDefault;
    modalWindow.classList.add("open")
});
modal.addEventListener("click",function(){
    modalWindow.classList.add("open")
});
buttonCloseModal.addEventListener("click",function(){
    modalWindow.classList.remove("open")
});
window.addEventListener("keydown",(evt) => {
    if(evt.key === 'Escape'){
        modalWindow.classList.remove("open")
    }
});

function validation(form){
    
    function removeError(input) {
        const parent = input.parentNode;

        if (parent.classList.contains('error')) {
            parent.querySelector('.errorLabel').remove()
            parent.classList.remove('error')
        }
    }

    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('errorLabel')
        errorLabel.textContent = text
        parent.classList.add('error')
        parent.append(errorLabel)
    }

    function IsNumeric(char){
        if(char >= '0' && char <= '9')
            return true;
        return false;
    }

    function IsDigit(s){
        let i = 0;
        while(i<s.length){
            if(IsNumeric(s[i]==false))
                return false;
            i++;
        }
        return true;
    }

    function IsLetter(char){
        if(char >= 'a' && char <= 'z')
            return true;
        if(char >= 'A' && char <= 'Z')
            return true;
        if(char >= 'а' && char <= 'я')
            return true;
        if(char >= 'А' && char <= 'Я')
            return true;
        return false;
    }

    function IsWord(s){
        let i = 0;
        while(i<s.length){
            if(IsLetter(s[i]) == false)
                return false;
            i++;
        }
        return true;
    }

    let result = true;
    const allInputs = form.querySelectorAll('input');

    for(const input of allInputs){
        removeError(input);
        if(input.dataset.phoneLength){
            if(input.value.length != input.dataset.phoneLength){
                removeError(input);
                createError(input, `Неверный номер! Длина должна быть 11 цифр`);
                result = false;
            }
            if(isDigit(input.value) == false){
                removeError(input);
                createError(input, `В поле должны быть только цифры!`);
                result = false;
            }
        }
        if(input.dataset.name){
            if(input.value.length < 1 || IsWord(input.value) == false){
                removeError(input);
                createError(input, `Введите корректное имя!`)
            }
        }
    }
    return result;
}

document.getElementById('InputId').addEventListener('submit', function(evt){
    evt.preventDefault();
    if (validation(this) == true){
        alert('Данные заполенны корректно!');
    }
    else{
        alert('Данные заполненны некорректно!')
    }
})