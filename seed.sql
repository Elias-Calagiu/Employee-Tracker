USE employee_tracker_db;


INSERT INTO departments (name) VALUE ("Sales");
INSERT INTO departments (name) VALUE ("Marketing");
INSERT INTO departments (name) VALUE ("Accounting");


INSERT INTO roles (title, salary, departments_id) VALUE ("Head of Sales",70000, 1 );
INSERT INTO roles (title, salary, departments_id) VALUE ("Director of Marketing", 80000, 2);
INSERT INTO roles (title, salary, departments_id) VALUE ("Accountant", 60000, 3);


INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUE ("Elias","Calagiu", 1, 1);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUE ("Jake","Stone", 2, NULL);
INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUE ("Lavender","Berries", 3, NULL);