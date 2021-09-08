import { getData } from "../services/getData.js";
import {cardsTrueHTML} from "./cardsTrueHTML.js";
import {cardsFalseHTML} from "./cardsFalseHTML.js";
import {modal} from "./modal.js";


function showAllTask() {
    const divFinished = document.querySelector('.finished'),
          divUnFinished = document.querySelector('.unFinished');

    getData('db.json')
    .then(data => new Promise ((resolve, reject) => {
        data.task.forEach(item => {
            if (item.IsFinished == 'true') {
                divFinished.innerHTML += cardsTrueHTML(item);
            }
            if (item.IsFinished == 'false' ) {
                divUnFinished.innerHTML += cardsFalseHTML(item);
            }
        });
        resolve();
    })
    .then(modal()));
}

export {showAllTask};