let employees = [];

const form = document.getElementById('employee-form');
const messageContainer = document.getElementById('message');
const employeeList = document.getElementById('employee-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const profession = document.getElementById('profession').value;
  const age = parseInt(document.getElementById('age').value);

  if (name === '' || profession === '' || isNaN(age)) {
    showMessage('Please fill all fields', 'error');
  } else {
    const employee = {
      id: generateId(),
      name: name,
      profession: profession,
      age: age
    };

    employees.push(employee);
    displayEmployees();
    showMessage('Employee added successfully', 'success');
    form.reset();
  }
});

function generateId() {
  return employees.length + 1;
}

function displayEmployees() {
  employeeList.innerHTML = '';
  employees.forEach(function(employee) {
    const li = document.createElement('li');
    li.textContent = `${employee.name}, ${employee.profession}, ${employee.age} years old`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
      deleteEmployee(employee.id);
    });
    li.appendChild(deleteButton);
    employeeList.appendChild(li);
  });
}

function deleteEmployee(id) {
  employees = employees.filter(function(employee) {
    return employee.id !== id;
  });
  displayEmployees();
}

function showMessage(message, type) {
  messageContainer.textContent = message;
  messageContainer.className = '';
  messageContainer.classList.add(type + '-message');
  setTimeout(function() {
    messageContainer.textContent = '';
  }, 3000);
}