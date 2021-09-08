import {postData} from "../services/postData.js";

const modalAddInput = document.querySelector('.modalAdd-input-form');

function addTask() {
    modalAddInput.addEventListener('submit', (event) =>{
        event.preventDefault();
       
        const formData = new FormData(modalAddInput); 
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        
        postData('http://localhost:3000/task', json);
    });
    // postData('http://localhost:3000/task', JSON.stringify({
    //     taskTitle: document.querySelector('.inp-add-1').value,
    //     taskText: document.querySelector('.inp-add-2').value,
    //     IsFinished: document.querySelector('.inp-add-3').value,
    //     date: document.querySelector('.inp-add-4').value,
    //     color: document.querySelector('.inp-add-5').value,
    //     id: 1
    //   }));

}

export {addTask};

// {
//     "taskTitle": "Сходить на работу",
//     "taskText": "На машине",
//     "IsFinished": "false",
//     "date": "2021-08-30",
//     "color": "#218e0b",
//     "id": 1
//   }

