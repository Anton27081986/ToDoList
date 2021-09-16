import {postData} from "../services/postData.js";

const modalAddInput = document.querySelector('.modalAdd-input-form');

function addTask() {
    modalAddInput.addEventListener('submit', (event) =>{
        event.preventDefault();
       
        const formData = new FormData(modalAddInput); 
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        
        postData('http://localhost:3000/task', json);
    });
}

export {addTask};

