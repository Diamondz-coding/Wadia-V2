module.exports = {
    name: 'message clearer',
    description: "Clears Messages With Commands Clear [args]",
    execute(message, args){
        if(args[1] < 100) {
            message.channel.bulkDelete(args[1]);
        }
        
    }
    
    }