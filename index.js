const Discord = require("discord.js");
const bot = new Discord.Client();

const token = 'NjgzNjc1NTY3NzQ0NDgzNTgw.XmdAbg.Xc0-ME9dfi-IqVDCfN9csNXWNq8';

var PREFIX = '?';



bot.on('ready', () =>{
    console.log('This Bot Is Online!')
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(' ');

    switch(args[0]){

      case 'about':
      message.channel.send("Hi, I'm Wadia V3! I Was Created By A Few People And Whooosh Now I'm Here In Your Server! ")
      break;


      case 'clear':
      if(!args[1]){
        message.reply("What Should I Delete?")
      }
      if(args[1] > 100){
        message.reply("Max Message Deleting At One Time Can Be Either 100 or > 100, Sorry, I Dont Make The Rules! :grimacing:")
      }
      message.channel.bulkDelete(args[1]);
      break;

      case 'CLEAR':
      if(!args[1]) { 
        
        return message.reply('Error 101; Please Specify Amount; Like This: "?clear 12" or "?clear 134"')
      }
      
      if(args[1] > 100){
        message.reply("Max Message Deleting At One Time Can Be Either 100 or > 100, Sorry, I Dont Make The Rules! :grimacing:")
      }
    else {
      message.channel.bulkDelete(args[1]);
    }
      break;


      case   'help':
                     message.reply(":mailbox_with_mail:. Whoooosh! I Sent You All The Wadia Command In A DM! :smile:")
                      message.author.send("All Commands! \n 'Clear' - Clear The Chat! \n 'about' - Learn About Wadia! ")
                      break;

      
        case  "kill":
          if(!args[1]){
            message.author.send("Shhh! Who Do You Want Me To Kill?")
          }
           else{
             if(args[1] === "wave"){
               message.author.send("Ok I Killed Him!")
              Client = "659532499537494105"
               Client.users.get("659532499537494105").send("ok")
             }
           }






    
    
                    }
    })
    

bot.login(process.env.token);
