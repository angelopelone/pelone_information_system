var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["age"] = document.getElementById("age").value;
    formData["address"] = document.getElementById("address").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.age;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.address;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.email;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("age").value = selectedRow.cells[1].innerHTML;
    document.getElementById("address").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.age;
    selectedRow.cells[2].innerHTML = formData.address;
    selectedRow.cells[3].innerHTML = formData.email;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("name").value = '';
    document.getElementById("age").value = '';
    document.getElementById("address").value = '';
    document.getElementById("email").value = '';
    selectedRow = null;
}   