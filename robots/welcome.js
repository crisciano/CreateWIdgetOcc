let figlet = require('figlet');
let chalk = require('chalk');
const version = require('../package.json').version;

function robot(content){
  
  function welcome(){
    var msg = figlet.textSync('Create Widget Wizard')
    console.log( chalk.green(msg));
    console.log( chalk.green('Welcome Create Widget Wizard!!'));
    console.log( chalk.green(`Dev: ${content.dev}`));
    console.log( chalk.green(`Version: ${version}`));
    
  }

  welcome();
}

module.exports = robot