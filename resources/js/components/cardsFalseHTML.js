


function cardsFalseHTML(item) {
    return `
        <div class="row">
            <div class="col s12 m6 widthCard">
                <div class="card blue-grey darken-1" id="${item.id}">
                    <div class="card-content white-text">
                    <span class="card-title">${item.taskTitle}</span>
                    <p>${item.taskText}</p>
                    </div>
                    <div class="card-action">
                    <a href="#">Сделано</a>
                    <button class = "btnDel">Удалить</button>
                    <button class="btn">Редактировать</button>
                    </div>
                </div>
            </div>
        </div>
    `;
     
}

export {cardsFalseHTML};
    