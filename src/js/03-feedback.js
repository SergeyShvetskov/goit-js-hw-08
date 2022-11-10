import throttle from "lodash.throttle";
const refs = {
    form: document.querySelector(".feedback-form"),
    textarea: document.querySelector(".feedback-form textarea"),
    input: document.querySelector(".feedback-form input"),
}
const STORAGE_KEY = "feedback-form-state";
const objectForm = { email: "", message: ""};

refs.form.addEventListener("submit", onFormSubmit);

refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));
refs.input.addEventListener("input", throttle(onInputInput, 500));
populateTextarea();

function formObject() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objectForm));
}

function onFormSubmit (event) {
    event.preventDefault();//прибираємо дію по замовчуванню, щоб не перезавантажувалася сторінка
    console.log(objectForm);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
    objectForm.message = event.target.value;
    formObject();
}

function onInputInput(event) {
    objectForm.email = event.target.value;
   formObject();
}

function populateTextarea() {
    const savedForm = localStorage.getItem(STORAGE_KEY);    
    const parsedMessage = JSON.parse(savedForm);
    if (parsedMessage) {
        refs.textarea.value = parsedMessage.message;
        refs.input.value = parsedMessage.email;
    }
}