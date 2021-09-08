import { addTask } from "./postTask.js";


const btnAdd = document.querySelector('.btn-addTask'),
      modalAdd = document.querySelector('.modal-add'),
      btnModalAddCancel = document.querySelector('.btn-modalAdd-cancel'),
      btnModalAddApply = document.querySelector('.btn-modalAdd-apply');

function openModalAddTask() {
    modalAdd.classList.add('show');
    modalAdd.classList.remove('hide');

    document.body.style.overflow = 'hiden';

    
}

function closeModalAddTask() {
    modalAdd.classList.add('hide');
    modalAdd.classList.remove('show');

    document.body.style.overflow = '';
}


function modalAddTask() {
    btnAdd.addEventListener('click', () => {
        openModalAddTask();
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modalAdd.classList.contains('show')) {
            closeModalAddTask();
        }
    });

    btnModalAddCancel.addEventListener('click', () => {
        closeModalAddTask();
    });

    btnModalAddApply.addEventListener('click', () => {
        addTask();
        // closeModalAddTask();
    });


}



export {modalAddTask};