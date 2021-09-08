import { getData } from "../services/getData.js";
import { updateTask } from "./editTask.js";

const modalWindow = document.querySelector('.modal'),
      btnModalEdit = document.querySelector('.btn-modal-edit'),
      currentTask = {};


function openModal(id) {

    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');

    

    // document.body.style.overflow = 'hidden';
    getData('db.json')
    .then(data => {
        data.task.forEach(item => {
            if (item.id == id) {
                document.querySelector('.inp-1').value = item.taskTitle;
                document.querySelector('.inp-2').value = item.taskText;

                Object.assign(currentTask, item);
            }
        }); 
    });
}

function closeModal() {

    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');

    // document.body.style.overflow = '';
}

function modal() {
    const btns = document.querySelectorAll('.btn'),
          btnModalCancel = document.querySelector('.btn-modal-cancel'),
          input1 = document.querySelector('.inp-1'),
          input2 = document.querySelector('.inp-2');

    btns.forEach(item => {
        item.addEventListener('click', () => {
            openModal(item.parentElement.parentElement.id);
        });
    });

    document.addEventListener('keydown', (event) => {
        if(event.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal();
        }
    });

    btnModalCancel.addEventListener('click', () => {
        closeModal();
    });

    btnModalEdit.addEventListener('click', () => {
        updateTask(currentTask);
    });

}

// export {openModal};
// export {closeModal};
export {modal};

