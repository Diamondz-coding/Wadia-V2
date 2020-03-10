module.exports = {
    name: 'message clearer',
    description: "Clears Messages With Commands Clear [args]",
    execute(message, args){
        if(args[1] === "commands") {
            message.reply("All Commands! \n 'Clear' - Clear The Chat! \n 'about' - Learn About Wadia! :white_check_mark:")
          }
          else {
            message.reply("What Would You Like To Know About Wadia? Next Time Type ?wadia commands")
          }
        
    }
    
    }
