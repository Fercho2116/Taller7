function addPerson() {
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const sex = document.querySelector('input[name="sex"]:checked').value;
    const maritalStatus = document.getElementById('maritalStatus').value;
    const age = document.getElementById('age').value;

    // Crear una nueva fila para la tabla
    const tableBody = document.getElementById('peopleTableBody');
    const newRow = tableBody.insertRow();

    // Insertar las celdas en la nueva fila
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    // Añadir los valores a las celdas
    cell1.textContent = name;
    cell2.textContent = sex;
    cell3.textContent = maritalStatus;
    cell4.textContent = age;

    // Limpiar el formulario
    document.getElementById('registrationForm').reset();
}
