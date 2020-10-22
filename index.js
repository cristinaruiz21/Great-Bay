
const inquirer = require("inquirer");



const options = ["POST", "BID", "EXIT"];
function init() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "what is your Would you like to POST an auction or BID auction?",
                name: "option",
                choices: options

            }
          

        ]).then(function (data) {

            if (data.option=== "POST") {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "what is the item you would like to submit?",
                        name: "item"
                    },
                    {
                        type: "input",
                        message: "what category would you like to place your auction in?",
                        name: "category"
                    },
                    {
                        type: "input",
                        message: "what would you like your starting bid to be?",
                        name: "postValue"
                    }
                ]).then(function (role) {
                    console.log("your auction successfully created");
                     init();
                })

            }
            else if (data.option === "BID") {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "what auction would you like to place a bid in?",
                        name: "bidItem"
                    },
                    {
                        type: "input",
                        message: "How much would you like to bid?",
                        name: "bidValue"
                    }
                ]).then(function (role) {
                    console.log("validating");

                    init();
                })
            }
            else if (data.role === "END") {
                console.log("OK");
                
            }
        })
}


init();




