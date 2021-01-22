const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require ("console.table")


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_tracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    init();
});
  

  function init() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all employees",
          "View all employees by department",
          "View all employees by manager",
          "Add employee",
          "Remove employee",
          "Update employee",
          "Exit"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "View all employees":
          allEmployees();
          break;
  
        case "View all employees by department":
          byDepartment();
          break;
  
        case "View all employees by manager":
          byManager();
          break;
  
        case "Add employee":
          addEmployee();
          break;
        case "Remove employee":
          removeEmployee();
          break;
        case "Update employee":
          updateEmployee();
          break;
  
        case "Exit":
          connection.end();
          break;
        }
      });
  };

  function allEmployees(){
    connection.query("SELECT * FROM employee JOIN roles ON employee.roles_id = roles_id JOIN departments ON roles.department_id = departments.id",
    function(err, res){
        if (err){
            throw err
        } else {
            console.table(res)
        }
    })
  };