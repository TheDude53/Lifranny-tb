const tb = require("tb93");
let bot = new tb.Trollbox(new tb.User("Lifranny [^h]", "Chocolate;bot"),true);
var sec = 0
let devs = ["MTYwNjA","MzhjMDQ", "OTFiNzR", "MTg4ZGN", "OTBmYjI", "NTk2ZGY"]
setInterval(function(){
    sec++
},1000)
let pref = "^";
bot.on_message = msg => {

  if (msg.content.toLowerCase() === pref+"help") {
    bot.send("┌───────────────────────────────────┐\n│ Lifranny v0.80 Commands     _ □ x │\n├─────────┬───────────┬─────────────┤\n│ "+pref+"help   │ "+pref+"reverse  │ "+pref+"tb64       │\n│ "+pref+"kill   │ "+pref+"userinfo │ "+pref+"fb64       │\n│ "+pref+"duck   │ "+pref+"runtime  │ "+pref+"devmode    │\n│ "+pref+"random │ "+pref+"time     │ "+pref+"links      │\n│ "+pref+"vapor  │ "+pref+"cmmds    │ "+pref+"say        │\n├─────────┴───────────┴─────────────┤\n│ © 2020 Magestick/Nixtrome         │\n└───────────────────────────────────┘")
  }
  if (msg.content.toLowerCase() === pref+"ruhelp") {
    bot.send("ОШИБКА 428: Файл russian.hlp не найден")
  }
  if (msg.content.toLowerCase() === pref+"ognick") {
    bot.socket.emit('user joined','Lifranny ['+pref+'h]','Chocolate;bot','','','')
  }
  if (msg.content.toLowerCase().startsWith(pref+"name")) {
    if (devs.includes(msg.home)){
      var name = msg.content.replace(pref+"name","") //grab args
      if (name == pref+"name" || name == ""){
      bot.send("Nope! Type name!");
      return
      }
      if (name.toLowerCase().includes("gayleb")){
        return;
        }
      CURRENTNAME=name;
    bot.socket.emit('user joined', name, '#0094FF;bot','','','')
  }
  return
}
  if (msg.content.toLowerCase() === pref+"othername") {
    bot.socket.emit('user joined','Lopunny ['+pref+'h]','Chocolate','','','')
  }
  if (msg.content.toLowerCase() === pref+"h") {
    bot.send("┌───────────────────────────────────┐\n│ Lifranny v0.80 Commands     _ □ x │\n├─────────┬───────────┬─────────────┤\n│ "+pref+"help   │ "+pref+"kill     │ "+pref+"tb64       │\n│ "+pref+"fsb    │ "+pref+"userinfo │ "+pref+"fb64       │\n│ "+pref+"duck   │ "+pref+"runtime  │ "+pref+"devmode    │\n│ "+pref+"random │ "+pref+"time     │ "+pref+"links      │\n│ "+pref+"vapor  │ "+pref+"cmmds    │ "+pref+"say        │\n├─────────┴───────────┴─────────────┤\n│ © 2020 Magestick/Nixtrome         │\n└───────────────────────────────────┘")
  }
  if (msg.content.toLowerCase() === pref+"links") {
    bot.send("MySpace Links\nMine: https://myspace.windows93.net/index.php?id=13516 \nMagestick's MySpace: https://myspace.windows93.net/index.php?id=4646 \n\nJoin to Disc​ord server: https://disco​rd.gg/Ebdx8PK")
  }
  if (msg.content.startsWith(pref+"duck ") || msg.content.toLowerCase() === pref+"duck"){
    var arg = msg.content.replace(pref+"duck ","")
    if (arg=="" || arg==pref+"duck"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg==pref+"duck "){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg.toLowerCase().includes("lifranny")){
      if (msg.home == "MTYwNjA") {
      bot.send("no duck me please");
      return "no kill";
      }
      bot.send("No u, bitch! " +msg.nick+" you are now duck!");
      return "no kill";
    }
    bot.send("Hey! "+ arg +" you are now duck!");
  }
  if (msg.content.startsWith(pref+"imagine ") || msg.content == pref+"imagine"){
    var arg = msg.content.replace(pref+"imagine ","")
    if (arg=="" || arg==pref+"imagine"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    bot.send("I can't even imagine "+arg+", bro")
  }
  if (msg.content.startsWith(pref+"say ") || msg.content == pref+"say"){
    var arg = msg.content.replace(pref+"say ","")
    if (arg=="" || arg==pref+"say"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg.toLowerCase().startsWith("!")){
      return
      }
      if (arg.toLowerCase().startsWith("/")){
        bot.send(`The "/" commands don't work.`)
        return
        }
        if (arg.toLowerCase().startsWith("*hugs")){
          bot.send(`nope`)
          return
          }
    bot.send(arg)
  }
  if (msg.content.startsWith(pref+"kill ") || msg.content.toLowerCase() === pref+"kill"){
    var arg = msg.content.replace(pref+"kill ","")
    if (arg=="" || arg==pref+"kill"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg==pref+"kill "){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg.toLowerCase().includes("nixtrome")){
      bot.send("No u, bitch! " +msg.nick+" you are now duck!");
      return "no kill";
      }
      if (arg.toLowerCase().includes("lifranny")){
        if (msg.home == "MTYwNjA") {
          bot.send("don't kill me please")
          return
               }
        bot.send("No u, bitch! " +msg.nick+" you are now duck!");
        return "no kill";
        }
    bot.send(msg.nick + " kills " + arg + ", ouch!");
  }
  if (msg.content.startsWith(pref+"lowercase ") || msg.content == pref+"lowercase"){
    var arg = msg.content.replace(pref+"lowercase ","")
    if (arg=="" || arg==pref+"lowercase"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg.toLowerCase().includes(",give")){
    bot.send("Wait, thats illegal! Request ducked.")
    return;
    }
    if (arg.toLowerCase().includes("*hugs")){
    bot.send("An illegal reflective access operation has occurred!")    
    return;
    }
    if (arg.startsWith("!")){
      return;
      }
    bot.send(arg.toLowerCase())
  }
  if (msg.content.startsWith(pref+"uppercase ") || msg.content == pref+"uppercase"){
    var arg = msg.content.replace(pref+"uppercase ","")
    if (arg=="" || arg==pref+"uppercase"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    if (arg.includes(",give")){
        bot.send("Wait, thats illegal! Request ducked.")
        return;
        }
        if (arg.includes("*hugs")){
        bot.send("An illegal reflective access operation has occurred!")    
        return;
        }
        if (arg.startsWith("!")){
          return;
          }
    bot.send(arg.toUpperCase())
  }
  if (msg.content.startsWith(pref+"vapor ") || msg.content == pref+"vapor"){
    var arg = msg.content.replace(pref+"vapor ","")
    if (arg=="" || arg==pref+"vapor"){
    bot.send("Duck, insert an argument!");
    return "missing arg";
    }
    bot.send(arg.split("").join(" "))
  }
  if (msg.content.toLowerCase() === pref+"random") {
    const text = require('./random.json')
    bot.send(text.random[Math.round(Math.random()*text.random.length-1)])
  }
  if (msg.content.toLowerCase() === pref+"osnamegen") {
    const text = require('./companies.json')
    const namegen = require('./osname.json')
    bot.send(text.companies[Math.round(Math.random()*text.companies.length-1)] + " " + namegen.osname[Math.round(Math.random()*namegen.osname.length-1)])
  }
  if (msg.content.toLowerCase() === pref+"userinfo") {
    if (devs.includes(msg.home)){
    bot.send("Name  | " +msg.nick+ "\nColor | " +msg.color+ "\nHome  | " + msg.home + "\nPerms | DevMode")
  }
    bot.send("Name  | " +msg.nick+ "\nColor | " +msg.color+ "\nHome  | " + msg.home + "\nPerms | User")
  }
  if (msg.content.toLowerCase() === pref+"devmode") {
    if (devs.includes(msg.home)){
      bot.send("DevMode Console v0.01 (" + msg.nick + ")\n\n"+pref+"evaljs <jscode> - Execute JS!\n"+pref+"exit - Turn off\n"+pref+"name <name> - Set the nick")
      }
  bot.send('You arnt very amdin')
}
if (msg.content.toLowerCase().startsWith(pref+"reverse ")) {
  msg.content = msg.content.slice(8);
  bot.send(msg.content.split('').reverse().join(''))
}
  if (msg.content.toLowerCase() === pref+"howgay") {
    bot.send("you are " + Math.floor(Math.random() * 101) + "% gay")
  }
  if (msg.content.toLowerCase() === pref+"simprate") {
    bot.send("you are " + Math.floor(Math.random() * 101) + "% simp")
  }
  if (msg.content.toLowerCase() === pref+"exit") {
    if (devs.includes(msg.home)){
    bot.send("It's now safe to turn off your computer.")
    setTimeout(() => process.exit(), 4000);
    }
    bot.send('You arnt very amdin')
  }
if (msg.content.toLowerCase() === pref+"cmmds") {
  bot.send("Other Commands: "+pref+"simprate, "+pref+"howgay, "+pref+"imagine <word>, "+pref+"osnamegen\n\n< > = Required argument")
  }
if (msg.content.startsWith(pref+"evaljs") || msg.content == pref+"evaljs"){
    var shit = msg.content.replace(pref+"evaljs ","") //grab args
    if (devs.includes(msg.home)){
    if (shit == pref+"evaljs" || shit == ""){
    bot.send("Nope! Type js!")
    return
    }
    if (shit==pref+"evaljs "){
        bot.send("Missing argument! ");
        return "missing arg";
    }
    if (shit.toLowerCase().includes('child_process')){
     bot.send("ERROR:Illegal access to computer detected!")
     return "illegal";
    }
    if (shit.includes("*hugs")){
      bot.send("I do this later, but not now!")    
      return;
      }
          if (shit.includes("!send")){
      bot.send("I do this later, but not now!")    
      return;
      }
    bot.send("Returned: " + eval(shit))
} else {
    bot.send("you arnt very amdin")
    }
    }
    
  if (msg.content.toLowerCase() === pref+"fsb") {
    bot.send("*knock-knock*\nFSB FIRE UP!!! ︻┳═一 NOW DUCK OFF " +msg.nick+ ("!"))
  }
  if (msg.content.toLowerCase() == (pref+"runtime")) {
    var min = Math.floor(sec/60)%60
    var secs = sec%60
    var hour = Math.floor(sec/3600)%24
    var day = Math.floor(sec/86400)
    bot.send(`${day}d, ${hour}hr, ${min}min, ${secs}sec.`)
}
if (msg.content.toLowerCase() == (pref+"time")) {
    bot.send(new Date().toString())
}
if (msg.content.startsWith(pref+"tb64 ")) {
  if(msg.home.includes(MTIzMDc)) {return}
  const btoa = b => Buffer.from(b).toString('base64')
  var TEMP = msg.content.replace(pref+"tb64 ","")
  if (msg.content.toLowerCase().startsWith("!")){
    return
    }
    if (msg.content.toLowerCase().startsWith("/")){
      bot.send(`The "/" commands don't work.`)
      return
      }
      if (msg.content.toLowerCase().startsWith("*hugs")){
        bot.send(`nope`)
        return
        }
  bot.send(btoa(TEMP));
  }
if (msg.content.startsWith(pref+"fb64 ")) {
  if(msg.home.includes(MTIzMDc)) {return}
  const atob = a => Buffer.from(a, 'base64').toString('binary')
  var TEMP = msg.content.replace(pref+"fb64 ","")
  bot.send(atob(TEMP));
  }

//msg.content.toLowerCase() - content of message
//msg.nick - username
//msg.home - home-id
//msg.date - date when message created
};
bot.on_error = err => { bot.send("Congrats, you are broke it up!\n" + err.toString()) }
bot.connect();