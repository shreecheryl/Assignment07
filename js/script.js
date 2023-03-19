// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const $ = (id) => document.getElementById(id);
let form = $("addForm");
let table = $("employees");
let empCount = $("empCount");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let employeeID = $("id").value;
    let fullName = $("name").value;
    let extension = $("extension").value;
    let email = $("email").value;
    let department = $("department").value;
    
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExtension = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDepartment = row.insertCell();
    let cellDelete = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(employeeID));
    cellName.appendChild(document.createTextNode(fullName));
    cellExtension.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDepartment.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    let textDelete = document.createTextNode('X');
    deleteBtn.appendChild(textDelete);
    cellDelete.appendChild(deleteBtn);

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    $("id").focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    empCount.innerHTML = count;

});

// DELETE EMPLOYEE
table.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
        let deletePerson = e.target.parentElement.parentElement.children[1].innerHTML;
        let confirmed = confirm(`Are you sure you want to delete ${deletePerson}?`);
        if (confirmed) {
            table.deleteRow(e.target.parentElement.parentElement.rowIndex);
            count--;
            empCount.innerHTML = count;
        }
    }
});