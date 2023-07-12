# employee_tracker

## Description

The Employee Tracker is a command-line application built with Node.js, Inquirer, and MySQL. It allows business owners to view and manage their company's departments, roles, and employees. The application provides an intuitive interface to organize and plan the business effectively.

The motivation behind building this project was to create a user-friendly content management system (CMS) that allows non-developers to interact with the company's employee database easily. By providing features like viewing departments, roles, and employees, adding new departments, roles, and employees, and updating employee roles, the application simplifies database management for business owners.

The Employee Tracker solves the problem of manual database management by automating the process through a command-line interface. It eliminates the need for writing SQL queries directly and provides a more accessible and intuitive way to interact with the database.

Through this project, I learned how to use Inquirer for user input, MySQL2 to connect to a MySQL database, and console.table to display formatted tables in the command line. I also gained experience in designing and implementing a database schema, organizing SQL queries, and structuring the codebase effectively.

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To install and run the Employee Tracker application, follow these steps:

1. Clone the GitHub repository.
2. Navigate to the project's root directory in your terminal.
3. Run the following command to install the required dependencies: npm install
4. Set up your MySQL database by executing the SQL commands provided in the seeds.sql file. This will create the necessary tables and populate them with sample data.
5. Update the database connection configuration in the index.js file with your MySQL credentials.
6. Start the application by running the following command: node index.js

## Usage

The Employee Tracker application provides the following functionality:

1. View All Departments: Lists all departments in the company along with their IDs.
2. View All Roles: Displays a table with job titles, role IDs, department names, and salaries for each role.
3. View All Employees: Shows a formatted table with employee data, including employee IDs, first names, last names, job titles, departments, salaries, and manager details.
4. Add a Department: Allows you to add a new department by providing the department name.
5. Add a Role: Enables you to add a new role by entering the role title, salary, and department ID.
6. Add an Employee: Lets you add a new employee by providing their first name, last name, role ID, and manager ID.
7. Update an Employee Role: Allows you to update the role of an existing employee by selecting the employee from a list and choosing their new role.
8. Delete a Department: Allows you to delete a department by selecting the department name.
9. Delete a Role: Allows you to delete a role by selecting the role name.
10. Delete an Employee: Allows you to delete an employee by selecting the employee name.

To use the application, follow the prompts and select the desired options from the menu. The results will be displayed in a formatted table in the command line.

Git Hub Repository:

https://github.com/Jalzu1007/employee_tracker.git

Walk-through video of the Note Taker Application:

[![employee_tracker](https://img.youtube.com/vi/97p-g2GcSyQ/0.jpg)](https://www.youtube.com/watch?v=97p-g2GcSyQ)

## Credits

I used the following third-party assets in this project:

- https://www.youtube.com/watch?v=zsjvFFKOm3c
- https://youtu.be/Cz3WcZLRaWc
- https://youtu.be/p3qvj9hO_Bo
- https://youtu.be/9HXJUGT-06w
- https://youtu.be/lScJW5Qz_5k
- https://youtu.be/620DzFVz41o
- https://youtu.be/rFssfx37UJw
- https://youtu.be/G3lJAxg1cy8
- https://youtu.be/lweF--_3Pk8
- https://youtu.be/2HVMiPPuPIM
- https://youtu.be/nivyaiCeWjs
- https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-getting-started.html
- https://dev.mysql.com/doc/refman/8.0/en/creating-database.html
- https://dev.mysql.com/doc/refman/8.0/en/creating-tables.html
- https://docs.oracle.com/cd/B19306_01/server.102/b14220/schema.htm
- https://dev.mysql.com/doc/refman/8.0/en/constraint-primary-key.html

## License

N/A