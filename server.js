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
          "View all departments",
          "View all roles",
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
  
        case "View all departments":
          allDepartments();
          break;
  
        case "View all roles":
          allRoles();
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
    connection.query("SELECT * FROM employee JOIN roles ON employee.roles_id = roles_id JOIN departments ON roles.departments_id = departments.id",
    function(err, res){
        if (err){
            throw err
        } else {
            console.table(res)
            init();
        }
    })
  };

  function allDepartments(){
    connection.query("SELECT * FROM departments",
    function(err, res){
        if (err){
            throw err
        } else {
            console.table(res)
        }
    })
  };
  function allRoles(){
    connection.query("SELECT * FROM roles",
    function(err, res){
        if (err){
            throw err
        } else {
            console.table(res)
        }
    })
  };

  function addEmployee(){
    connection.query("SELECT * FROM roles", function(err, res){
      if (err){
        throw err
      }
      inquirer
      .prompt([
        {
        name: "first_name",
        type: "input",
        message: "What's the employee's first name?"
      },
        {
        name: "last_name",
        type: "input",
        message: "What's the employee's last name?"
      },
        {
        name: "roles",
        type: "list",
        message: "What's the employee's role?",
        choices: res.map((roles) => ({
          name: roles.title,
          value: roles.id
      }))
      },
        {
        name: "manager",
        type: "number",
        message: "Who is this employee's manager?",
      },
    ]).then(function(input){
      connection.query("INSERT INTO employee SET ?",{
        first_name: input.first_name,
        last_name: input.last_name,
        roles_id: input.roles,
        manager_id: input.manager
      })
      init();

    })

    })

  }