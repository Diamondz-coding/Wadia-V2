module.exports = {
    name: 'message clearer',
    description: "Clears Messages With Commands Clear [args]",
    execute(message, args){
        if(!args[1]) {

            return message.reply('Error 101; Please Specify Amount; Like This: "?clear 12" or "?clear 134"')
          }
    
          else {
            message.channel.bulkDelete(args[1]);
        }
        
    }
    
    }