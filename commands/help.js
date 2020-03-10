module.exports = {
    name: 'help',
    description: "send user list of commands in a DM",
    execute(message, args){
        message.reply(":mailbox_with_mail:. Whoooosh! I Sent You All The Wadia Command In A DM! :smile:")
        message.author.send("All Commands! \n 'Clear' - Clear The Chat! \n 'about' - Learn About Wadia! ")
    }
    
    }