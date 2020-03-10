const Discord = require("discord.js");
const bot = new Discord.Client();

const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

const token = 'NjgzNjc1NTY3NzQ0NDgzNTgw.XmdAbg.Xc0-ME9dfi-IqVDCfN9csNXWNq8';

var PREFIX = '?';

var randomnumb = ["You Rolled 1", "You Rolled 2", "You Rolled 3", "You Rolled 4", "You Rolled 5", "You Rolled 6"]

var fortniteland = ["Craggy Cliffs", "Dirty Docks", "Frenzy Farm", "Holly Hedges", "The Agency", "Misty Meadows", "Pleasant Park", "Retail Row", "Salty Springs", "Slurpy Swamps", "Steamy Stacks", "The Yacht", "The Rig", "The Shark", "The Grotto"];

var version = "1.3.2";

bot.on('ready', () => {
    console.log('This Bot Is Online!')
})
bot.on('message', message => {
let args = message.content.substring(PREFIX.length).split(' ');
switch (args[0]) {
case 'about':
            if (args[1] === "wadia") {
                bot.commands.get("aboutwadia").execute(message, args);
            }
            break;
case "ping": 
            bot.commands.get("ping").execute(message, args);
            break;
case 'clear':
            if (!args[1]) return message.reply(':x: Error Please Define Second arg :x:')
            message.channel.bulkDelete(args[1]);
            break;
case 'CLEAR':
            if (!args[1]) return message.reply(':x: Error Please Define Second arg :x:')
            message.channel.bulkDelete(args[1]);
            break;
case 'help':
            bot.commands.get("help").execute(message, args);
            break;
case 'hello':
            bot.commands.get("hello").execute(message, args);
            break;
case 'wadia':
          if(!args[1]) return message.reply("Sorry, I Don't Understand, Try Again With ?wadia commands")
          else if(args[1] === "commands"){
            message.reply("Would You Like Your Commands In A DM Or Just Here; Type '?dm me' or '?just here' to answer")
          }
case "just":
          if(!args[1]) return message.reply("Do You Mean '?just here' ?")
          else if(args[1] === "here") return message.channel.send("All Commands! \n 'Clear' - Clear The Chat! \n 'about' - Learn About Wadia! :white_check_mark:")
          break;
case "dm":
            if(!args[1]) return message.reply("Do You Mean '?dm me' ?")
            else if(args[1] === "me") return message.author.send("All Commands! \n 'Clear' - Clear The Chat! \n 'about' - Learn About Wadia! :white_check_mark:")
case "roll":
              var random = Math.floor(Math.random() * 6);
            if(!args[1]) return message.reply("What Do You Want Me To Roll?")
            else if(args[1] === "dice") return message.channel.send(randomnumb[random]);
            break;
case 'fortnite':
              var whereland = Math.floor(Math.random() * 15);
              if(!args[1]) return message.reply("What About Fortnite?; Try ?fortnite landing")
              else if(args[1] === "landing") return message.channel.send(fortniteland[whereland]);
              break;
case "info":
                if(!args[1]) return message.reply("What Would You Like To Know About? Try '?info version'")
                else if(args[1] === "version") return message.channel.send("Wadia Is Currently On Version 1.3.2")
                else if(args[1] === "creation") return message.channel.send(" Hi, I'm Wadia, I Was Created By Two People And I'll Call Them Wave And Diamondz They Are Beginner Coders So It Took Them 3 Days To Get The BotTo Work And Also NEITHER Of Them Knew The Slightest Part OF Node.js! https://tenor.com/view/hopeless-disappointed-ryan-reynolds-facepalm-embarrassed-gif-5436796 \n I'm Currently Hosted On GitHub And Heroku! Click This Link To See Me On GitHub!: https://github.com/Diamondz-coding/Wadia-V2");

                break;
                
        }
})
bot.login(process.env.token);