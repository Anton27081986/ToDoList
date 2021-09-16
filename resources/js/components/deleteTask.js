import { deleteData } from "../services/deleteData.js";



function deleteTask() {
    let delId;
    const btnDels = document.querySelectorAll('.btnDel');
    console.log(btnDels);
    btnDels.forEach(item => {
        item.addEventListener('click', (event) => {
            delId = item.parentElement.parentElement.id;
            deleteData(`http://localhost:3000/task/${delId}`);
        });
    });
    
}





export {deleteTask};