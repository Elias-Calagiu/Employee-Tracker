DROP DATABASE IF EXISTS employee_tracker_db;

Create DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE departments (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY(id)
);

SELECT * FROM employee JOIN roles ON employee.roles_id = roles.id JOIN departments ON roles.departments_id = departments_id;
