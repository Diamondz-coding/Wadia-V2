module.exports = {
    name: 'hello',
    description: "says ping!",
    execute(message, args){
        message.channel.send("Hello! How Are You Doing?")
    }
    
    }