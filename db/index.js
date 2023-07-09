const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
require('dotenv').config();

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});
  
// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
  // Call the function to start the application
  start();
});

// Function to display the main menu and prompt user input
function start() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    })
    .then((answer) => {
      // Call the appropriate function based on the user's choice
      switch (answer.action) {
        case 'View all departments':
          viewAllDepartments();
          break;
        case 'View all roles':
          viewAllRoles();
          break;
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployeeRole();
          break;
        case 'Exit':
          connection.end();
          break;
      }
    });
}

// Function to view all departments
function viewAllDepartments() {
  const query = 'SELECT * FROM department';
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

// Function to view all roles
function viewAllRoles() {
  const query = 'SELECT * FROM role';
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

// Function to view all employees
function viewAllEmployees() {
  const query = `
    SELECT e.id, e.first_name, e.last_name, r.title AS role, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM employee e
    LEFT JOIN role r ON e.role_id = r.id
    LEFT JOIN department d ON r.department_id = d.id
    LEFT JOIN employee m ON e.manager_id = m.id`;
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

// Function to add a department
function addDepartment() {
  inquirer
    .prompt({
      name: 'name',
      type: 'input',
      message: 'Enter the name of the department:',
    })
    .then((answer) => {
      const query = 'INSERT INTO department SET ?';
      connection.query(query, { name: answer.name }, (err) => {
        if (err) throw err;
        console.log('Department added successfully!');
        start();
      });
    });
}

// Function to add a role
function addRole() {
  inquirer
    .prompt([
      {
        name: 'title',
        type: 'input',
        message: 'Enter the title of the role:',
      },
      {
        name: 'salary',
        type: 'input',
        message: 'Enter the salary for the role:',
      },
      {
        name: 'departmentId',
        type: 'input',
        message: 'Enter the department ID for the role:',
      },
    ])
    .then((answer) => {
      const query = 'INSERT INTO role SET ?';
      const role = {
        title: answer.title,
        salary: answer.salary,
        department_id: answer.departmentId,
      };
      connection.query(query, role, (err) => {
        if (err) throw err;
        console.log('Role added successfully!');
        start();
      });
    });
}

// Function to add an employee
function addEmployee() {
  inquirer
    .prompt([
      {
        name: 'firstName',
        type: 'input',
        message: "Enter the employee's first name:",
      },
      {
        name: 'lastName',
        type: 'input',
        message: "Enter the employee's last name:",
      },
      {
        name: 'roleId',
        type: 'input',
        message: "Enter the employee's role ID:",
      },
      {
        name: 'managerId',
        type: 'input',
        message: "Enter the employee's manager ID:",
      },
    ])
    .then((answer) => {
      const query = 'INSERT INTO employee SET ?';
      const employee = {
        first_name: answer.firstName,
        last_name: answer.lastName,
        role_id: answer.roleId,
        manager_id: answer.managerId,
      };
      connection.query(query, employee, (err) => {
        if (err) throw err;
        console.log('Employee added successfully!');
        start();
      });
    });
}

// Function to update an employee's role
function updateEmployeeRole() {
  // Retrieve the list of employees for the prompt
  const query = 'SELECT * FROM employee';
  connection.query(query, (err, employees) => {
    if (err) throw err;
    const employeeChoices = employees.map((employee) => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id,
    }));

    // Prompt for employee selection and new role ID
    inquirer
      .prompt([
        {
          name: 'employeeId',
          type: 'list',
          message: 'Select the employee to update:',
          choices: employeeChoices,
        },
        {
          name: 'roleId',
          type: 'input',
          message: 'Enter the new role ID:',
        },
      ])
      .then((answers) => {
        const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
        connection.query(
          query,
          [answers.roleId, answers.employeeId],
          (err) => {
            if (err) throw err;
            console.log('Employee role updated successfully!');
            start();
          }
        );
      });
  });
}