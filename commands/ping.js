module.exports = {
name: 'ping',
description: "says ping!",
execute(message, _args){
    message.channel.send("Pong!")
 }
}