import { putData } from '../services/putData.js';

function updateTask(currentTask) {
    console.log(currentTask);

    putData(`http://localhost:3000/task/${currentTask.id}`, JSON.stringify({
      taskTitle: document.querySelector('.inp-1').value,
      taskText: document.querySelector('.inp-2').value,
      IsFinished: currentTask.IsFinished,
      date: currentTask.date,
      color: currentTask.color,
      id: currentTask.id
    }));
}



export {updateTask};


// putData(http://localhost:3000/task/${id}, JSON.stringify({
//     taskTitle: document.querySelector('.contacts__input-title').value,
//     taskText: document.querySelector('.contacts__input-text').value,
//     IsFinished: result[0].IsFinished,
//     gridRadios: document.querySelector('.contacts__input-priority').value,
//     date: document.querySelector('.contacts__input-date').value,
//     color: document.querySelector('.contacts__input-color').value,
//     id: document.id
//     }));
//     console.log
//     document.querySelector('.darkening-background').remove();
//     document.querySelector('.contacts').classList.remove('show-edit-modal');
//     document.querySelector('.contacts').classList.add('contacts_none');
//     document.body.style.overflow = "visible";
// })