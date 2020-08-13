const addButton = document.querySelector('.addBtn');

const containProject = document.querySelector('.containProject')

var addtitle = document.querySelector('.addTitle');
var adddescp = document.querySelector('.adddescp');
var addsdate = document.querySelector('.addsdate');
var addedate = document.querySelector('.addedate');

class item {
    constructor(title, description, sdate, edate) {
        this.createDiv(title, description, sdate, edate);
    }

    createDiv(title, description, sdate, edate) {

        let inputTitle = document.createElement('input');
        let inputSDate = document.createElement('input');
        let inputEDate = document.createElement('input');
        let inputDescription = document.createElement('textarea');

        inputTitle.value = title;
        inputTitle.disabled = true;
        inputTitle.classList.add('form-control');
        inputTitle.type = "text";

        inputSDate.value = sdate;
        inputSDate.disabled = true;
        inputSDate.classList.add('form-control');
        inputSDate.type = "date";

        inputEDate.value = edate;
        inputEDate.disabled = true;
        inputEDate.classList.add('form-control');
        inputEDate.type = "date";

        inputDescription.value = description;
        inputDescription.disabled = true;
        inputDescription.classList.add('form-control');
        // inputDescription.type = "text";

        let outerdiv = document.createElement('div');

        let titleDiv = document.createElement('div');
        titleDiv.classList.add('form-group');

        let descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('form-group');

        let dateDiv = document.createElement('div');
        dateDiv.classList.add('form-row');

        let sdateDiv = document.createElement('div');
        sdateDiv.classList.add('form-group', 'col-md-6');

        let edateDiv = document.createElement('div');
        edateDiv.classList.add('form-group', 'col-md-6');

        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = "Remove";
        removeBtn.classList.add('btn', 'btn-outline-secondary', 'remBtn');

        containProject.appendChild(outerdiv);
        outerdiv.appendChild(titleDiv);
        outerdiv.appendChild(descriptionDiv);
        outerdiv.appendChild(dateDiv);
        titleDiv.appendChild(inputTitle);
        descriptionDiv.appendChild(inputDescription);
        dateDiv.appendChild(sdateDiv);
        dateDiv.appendChild(edateDiv);
        sdateDiv.appendChild(inputSDate);
        edateDiv.appendChild(inputEDate);
        containProject.appendChild(removeBtn);

        removeBtn.addEventListener('click', () => this.remove(outerdiv));

    }

    remove(item) {
        containProject.removeChild(item);
    }

}

function check() {
    if(addtitle.value != "" && adddescp.value != "" && addsdate.value != "" && addedate != "") {
        new item (addtitle.value, adddescp.value, addsdate.value, addedate.value);
        addtitle.value = "";
        adddescp.value = "";
        addsdate.value = "";
        addedate.value = "";
    }
}

addButton.addEventListener('click', check);