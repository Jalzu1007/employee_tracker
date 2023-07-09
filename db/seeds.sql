USE employees_db;

-- This allows you to insert values to the department section of the table
INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Accounting");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Human Resources");
INSERT INTO department (name)
VALUES ("Management");

-- This allows you to insert values to the role section of the table 
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 75000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Associate", 50000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Accounting Manager", 75000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accounting Associate", 50000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Engineering Manager", 75000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Engineering Associate", 50000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("HR Manager", 75000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("HR Associate", 50000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Senior Manager", 100000, 5);

-- This allows you to insert values to the employee section of the table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dwight", "Schrute", 2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jim", "Halpert", 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Pam", "Beesly", 4, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Angela", "Martin", 5, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kelly", "Kapoor", 6, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Andy", "Bernard", 7, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ryan", "Howard", 8, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kevin", "Malone", 9, NULL);