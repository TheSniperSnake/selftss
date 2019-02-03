const Discord = require('discord.js');
const client = new Discord.Client();
const marque = "LDD"; 
function random(min, max){
min = Math.ceil(1);
max = Math.floor(2);
randnum = Math.floor(Math.random() * (max - min + 1) + min);}


const config = { 
  "token"  : "NTMyNjA2NTQ0OTk1NDE4MTI0.DzhGCg.mNQMqwsZL8pNqRVLL34xnWA8JGU", //ton tokn
  "prefix" : "/" //le prefix que tu veux
};
const ownerID = "532606544995418124" //ton id pour pas que les autres pd ont accès aux commandes
//une fois tout rempli, enregistré, et lancé, fais une commande help


client.login(config.token);
console.log('\x1b[37m\x1b[44mLDD\x1b[0m: selfed by the TMMEH');

client.on('message', message => {
  const args = message.content.split(" ").slice(1);


// Autres 



    if (message.content === config.prefix + 'help'){ 
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let help = new Discord.RichEmbed()
    .setColor('#c842f4')
    .setTitle(`**${marque}**`)
    .setDescription(`Selfbot de la LDD dev par ＴＭＭＥＨ| Lҽαԃᘿɾ.🇱🇩🇩ء#0601.\nLes selfbots sont interdis par Discord. En l'utilisant tu acceptes le risque de ban Discord.\nNotes pour les commandes: {exemple} = obligatoire, ({exemple}) = pas obligatoire.`)
    .addField('❓ Commandes:', `:arrow_down: Les catégories et comment les faire apparaitre.`)
    .addField('🔧 Modération', `\`${config.prefix}p1\``)
    .addField('🎉 Fun', `\`${config.prefix}p2\``)
    .addField('🔑 Utile', `\`${config.prefix}p3\``)
    .addField('🔰 Statut', `\`${config.prefix}p4\``)
    .addField('🔎 Autres', `\`${config.prefix}p5\``)
    .setThumbnail("https://cdn.discordapp.com/attachments/529041928587575296/529762558392139778/ll.png")
    .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
    message.channel.send(help).then(message => message.delete(30000)).catch(console.error);
    console.log('h')}}
    if (message.content === config.prefix + 'p1'){
      if (message.author.id !== ownerID) {
      } else {
      message.delete().catch(O_o=>{});
      let help = new Discord.RichEmbed()
      .setColor('#f9b113')
      .setTitle(`**${marque}**`)
      .setDescription("🔧 Modération")
      .addField("🔧 Modération (necessite les permissions requises)", `**${config.prefix}ban {mention}** : \`Ban un membre\`\n**${config.prefix}kick {mention}** : \`Kick un membre\`\n**${config.prefix}addRole ({nom role})** : \`Ajouter un role\`\n**${config.prefix}sAvatar {lien img}** : \`Change la PP du serv\`\n**${config.prefix}sName {nom serveur}** : \`Change le nom du serv\`\n**${config.prefix}addChannel {nom salon}** : \`Ajoute un salon au serveur\`\n**${config.prefix}addVchannel {nom salon}** : \`Ajoute un salon vocal au serveur\`\n**${config.prefix}addCatego {nom salon}** : \`Ajoute une catégorie au serveur\`\n**${config.prefix}delChannel** : \`Delete le salon actuel\`\n**${config.prefix}setVérif {0 / 1 / 2 / 3 / 4}** : \`Change le niveau de vérification du serveur (0 = None, 1 = Low, 2 = Medium, 3 = High, 4 = Phone(parfais pour stopper un raid)).\`\n**${config.prefix}setOwner {mention}** : \`Pour mettre quelqu'un owner du serveur(DANGEREUX EVIDEMMENT).\`\n**${config.prefix}setTopic {text}** : \`Ajouter une description au salon actuel.\``)
      .setThumbnail("https://cdn.discordapp.com/attachments/529041928587575296/529762558392139778/ll.png")
      .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
      message.channel.send(help).then(message => message.delete(90000)).catch(console.error);
      console.log('h1')}}
        if (message.content === config.prefix + 'p2'){
          if (message.author.id !== ownerID) {
          } else {
          message.delete().catch(O_o=>{});
          let help = new Discord.RichEmbed()
          .setColor('#41c4f4')
          .setTitle(`**${marque}**`)
          .setDescription("🎉 Fun")
          .addField("🎉 Images", `**${config.prefix}bontoutou**/**deter**/**vento**/**iss**/**yaurarien**/**extermine**/**nofake**/**fake**/**pyj**/**reverse**/**gilberted**/**ddb**/**kj**/**gay**/**antigay**/**tonserv ({texte})**`)
          .addField("🎉 GIFs", `**${config.prefix}gpalu {mention}** : \`Vous ne lisez pas les messages qu'on vous envoie (no veski)\`\n**${config.prefix}victimed {mention}** : \`Victimiser quelqu'un\`\n**${config.prefix}épilepsie {mention}** : \`Envoie une attaque épileptique.\`\n**${config.prefix}tcon {mention}** : \`Mal regarder quelqu'un\`\n**${config.prefix}tsrx {mention}** : \`Demander qq1 si il est serieux.\`\n**${config.prefix}alerte {mention}** : \`Alerter quelqu'un\`\n**${config.prefix}caresse {mention}** : \`Pour mettre qq1 en position chien-chien\`\n**${config.prefix}éjac {mention}** : \`Envoie un raz-de-marée à quelqu'un\``)
          .setThumbnail("https://cdn.discordapp.com/attachments/529041928587575296/529762558392139778/ll.png")
          .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
          message.channel.send(help).then(message => message.delete(90000)).catch(console.error);
          console.log('h2')}}
          if (message.content === config.prefix + 'p3'){
            if (message.author.id !== ownerID) {
            } else {
            message.delete().catch(O_o=>{});
            let help = new Discord.RichEmbed()
            .setColor('#41f470')
            .setTitle(`**${marque}**`)
            .setDescription("🔑 Utile")
            .addField("🔑 Utile", `**${config.prefix}userinfo ({mention})** : \`Donne des infos sur sois meme ou sur quelqu'un d'autre.\`\n**${config.prefix}pp ({mention})** : \`Donne sa photo de profile ou celles des autres.\`\n**${config.prefix}serveurinfo** : \`Donne des infos sur le serveur.\`\n**${config.prefix}spp** : \`Afficher la pp du serveur.\`\n**${config.prefix}joinedat ({mention})** : \`Affiche la date d'arrivé de soi ou de quelqu'un sur le serveur.\`\n**${config.prefix}leave** : \`Fait quitter automatiquement le serveur.\`\n**${config.prefix}pf** : \`Un bon vieux pile ou face.\``)
            .setThumbnail("https://cdn.discordapp.com/attachments/529041928587575296/529762558392139778/ll.png")
            .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
            message.channel.send(help).then(message => message.delete(90000)).catch(console.error);
            console.log('h3')}}
            if (message.content === config.prefix + 'p4'){
              if (message.author.id !== ownerID) {
              } else {
              message.delete().catch(O_o=>{});
              let help = new Discord.RichEmbed()
              .setColor('#000000')
              .setTitle(`**${marque}**`)
              .setDescription("🔰 Statut")
              .addField("🔰 Statut", `**${config.prefix}stream {text}** : \`Se mettre en Streaming avec le text ajouté.\`\n**${config.prefix}game {text}** : \`Se mettre en Jeu avec le text ajouté.\`\n**${config.prefix}watching {text}** : \`Se mettre en Regarde à avec le text ajouté.\`\n**${config.prefix}live {text}** : \`Se mettre en Live On avec le text ajouté.\`\n**${config.prefix}listen {text}** : \`Se mettre en Listen avec le text ajouté.\`\n**${config.prefix}statut {online / dnd / idle / invisible}** \`Changer son statut Discord (online = vert, idle = jaune, dnd = rouge, invisible = gris)\``)
              .setThumbnail("https://cdn.discordapp.com/attachments/529041928587575296/529762558392139778/ll.png")
              .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
              message.channel.send(help).then(message => message.delete(90000)).catch(console.error);
              console.log('h4')}}
              if (message.content === config.prefix + 'p5'){
                if (message.author.id !== ownerID) {
                } else {
                message.delete().catch(O_o=>{});
                let help = new Discord.RichEmbed()
                .setColor('#c842f4')
                .setTitle(`**${marque}**`)
                .setDescription("🔎 Autres")
                .addField("🔎 Autres", `**${config.prefix}help** : \`...\`\n**${config.prefix}ci** : \`Affiche un caractère invisible à copier-coller\`\n**${config.prefix}infoself** : \`Give des informations sur le self et sa version et affiche les problèmes fréquemment rencontrés avec une commande.\`\n**${config.prefix}ldd** : \`Jolie invitation permanente de la LDD (frontière).\`\n**${config.prefix}crashtel** : \`Un gif qui fait crasher à coup sûr les utilisateurs de téléphones\`\n**${config.prefix}embed {text}** : \`Faire un embed personnalisé (BETA car j'envisage du plus lourf avec cette commande).\``)
                .setThumbnail("https://cdn.discordapp.com/attachments/529041928587575296/529762558392139778/ll.png")
                .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
                message.channel.send(help).then(message => message.delete(90000)).catch(console.error);
                console.log('h5')}}

if (message.content === config.prefix + "ldd"){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
let embed = new Discord.RichEmbed()
.setTitle(`**${marque}**`)
.setDescription("🔎 Autres")
.setColor('#c842f4')
.addField(`▇▓░ L' élite De Discord. ░▓▇`, `:shield: Protection anti-taupes.
:bomb: Raid, dox et destruction de serv à coup de bot.
:white_check_mark: Serveur propre et organisé.
:globe_with_meridians: Echange entre les kheys.
:scales: No abus de pouvoir.
Rejoins la frontière: :arrow_forward: https://discord.gg/FqFmRKH`)
.setThumbnail("https://cdn.discordapp.com/attachments/529041928587575296/529762558392139778/ll.png")
.setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
message.channel.send(embed);
console.log('ldd');}}
                
if (message.content === config.prefix + "infoself"){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
let embed = new Discord.RichEmbed()
.setTitle(`**${marque}**`)
.setDescription("🔎 Autres")
.setColor('#c842f4')
.addField("⚜️ Infos sur le selfbot:", "Self développé par 󠀀󠀀󠀀T̷̲́Ḙ̵̅M̴̫̽M̵̪͂E̷͙̾H̶͚̊ء󠀀󠀀󠀀#1500 <@506062622152458245> le 1er janvier 2019.\nDisponnible pour les @membres de la LDD. Toutes contrefaçons et/ou propagation du programme chez des non-membres de la LDD ainsi que modification du code (hormis placé son token, ID, prefix) par son utilisateur sera impunis. Mais si t'as le self pour voler son contenu comme un Arabe, sache que je m'en contre-balence les roubignolles mais ça fait de toi une victime sur laquelle je marche dessus.")
.addField("✅ Version", "V2 (orriginalement prévu pour être une correction de bug de la V1.2)")
.addField("❓ But?", "enculer discord.")
.addField("❗️ Problèmes rencontrés", "Dans la catégorie Statut il est possible que les commandes Game, Stream, listen, etc.. n'apparaissent pas car vous êtes deja entrain de jouer à un jeu. Pour corriger ça il faut aller dans ses Games Activity dans ses paramettres et désactiver le display. Un problème fréquent et que certainnes commandes qui affichent des embed n'apparaissent pas car l'utilisateur du self n'a pas la perm 'EMBED_LINKS' qui lui empêche de faire des embed, les commandes touchées sont le spp, le pp, le userinfo, le serveurinfo, le joinedat et le embed personnalisé. Et évidemmend utilisé des commandes de modération alors qu'on a pas les perms peut faire crash le self.")
.setThumbnail("https://cdn.discordapp.com/avatars/506062622152458245/d6bddf868ea4e6e6725c82fe248271cf.png?size=2048?size=2048")
.setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
message.channel.send(embed).then(message => message.delete(90000)).catch(console.error);
console.log('is');}}

if (message.content.startsWith(config.prefix + "embed")){
if (message.author.id !== ownerID) {
} else {
console.log(`e`);
message.delete().catch(O_o=>{});
let e = args.join(' ');
let embed = new Discord.RichEmbed()
.setColor("#c842f4")
.addField(e, e)
message.channel.send(embed).then(message => message.delete(30000)).catch(console.error);}}

if(message.content === config.prefix + "ci"){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
message.channel.sendMessage("```󠂪󠂪 ```:arrow_up: go copier-coller")
console.info("ci");}}

if (message.content === config.prefix + 'crashtel'){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
message.channel.sendMessage("https://cdn.discordapp.com/avatars/475435552628408320/a_3c357469c44d087ff2d9a0f9859e037f.gif?size=2048")
console.info("ct");}}


// Modération


if (message.content.startsWith(config.prefix + 'kick')) {
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
const member = message.mentions.users.first();
const moustapha = message.guild.member(member);
if (moustapha) {
moustapha.kick({
}).then(() => {
message.channel.sendMessage(`:white_check_mark: Kick opéré, ${member.tag} a été gerté du serveur.`).then(message => message.delete(3000)).catch(console.error);
}).catch(err => {
message.channel.sendMessage(":negative_squared_cross_mark: Kick refusé, Pas les permissions pour gerter ce membre du serveur.").then(message => message.delete(3000)).catch(console.error);
console.error(err);
console.info("k");})}}}

if (message.content.startsWith(config.prefix + 'ban')) {
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
const member = message.mentions.users.first();
const moustapha = message.guild.member(member);
if (moustapha) {
moustapha.ban({
}).then(() => {
message.channel.sendMessage(`:white_check_mark: Ban opéré, ${member.tag} a été banni(e) du serveur.`).then(message => message.delete(3000)).catch(console.error);
}).catch(err =>  {
message.channel.sendMessage(":negative_squared_cross_mark: Ban refusé, Pas les permissions pour bannir ce membre du serveur.").then(message => message.delete(3000)).catch(console.error);
console.error(err);
console.info("b");})}}}


if (message.content.startsWith(config.prefix + "addRole")) {
if (message.author.id !== ownerID) {
} else {
console.log(`ar`);
message.delete().catch(O_o=>{});
let nomrole = args.join(' ');
if (!nomrole) nomrole = "";
if (message.member.hasPermission("MANAGE_ROLES")){
message.guild.createRole({
name: nomrole})
message.channel.sendMessage(`:white_check_mark: Role "${nomrole}" créé.`).then(message => message.delete(2000)).catch(console.error);
} else {
message.channel.sendMessage(":negative_squared_cross_mark: Nope, pas les permissions d'ajouter un role.").then(message => message.delete(2000)).catch(console.error);}}}

if (message.content.startsWith(config.prefix + "setTopic")) {
if (message.author.id !== ownerID) {
} else {
console.log(`t`);
message.delete().catch(O_o=>{});
let t = args.join(' ');
if (message.member.hasPermission("MANAGE_CHANNELS")){
message.channel.setTopic(t);
message.channel.sendMessage(`:white_check_mark: Topic ajouté sur ce salon.`).then(message => message.delete(2000)).catch(console.error);
} else {
message.channel.sendMessage(":negative_squared_cross_mark: Nope, pas les permissions d'ajouter un topic.").then(message => message.delete(2000)).catch(console.error);}}}

if (message.content.startsWith(config.prefix + "sAvatar")){
if (message.author.id !== ownerID) {
} else {
console.log(`sa`);
message.delete().catch(O_o=>{});
let icon = args.join(' ');
if (!icon) icon = "";
if (message.member.hasPermission("MANAGE_GUILD")){
message.guild.setIcon(icon).catch(console.error);
message.channel.sendMessage(`:white_check_mark: PP du serveur changé.`).then(message => message.delete(2000)).catch(console.error);
} else {
message.channel.sendMessage(":negative_squared_cross_mark: Pas les permissions de changer la PP du serveur.").then(message => message.delete(2000)).catch(console.error);}}}
      
if (message.content.startsWith(config.prefix + "sName")){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
console.log(`sn`);
let name = args.join(' ');
if (!name) name = "";
if (message.member.hasPermission("MANAGE_GUILD")){
message.guild.setName(name).catch(console.error);
message.channel.sendMessage(`:white_check_mark: Nom du serveur changé.`).then(message => message.delete(2000)).catch(console.error);
} else { message.channel.sendMessage(`:negative_squared_cross_mark: Pas les permissions pour changer le nom du serveur.`).then(message => message.delete(2000)).catch(console.error);}}}
        
if (message.content.startsWith(config.prefix + "addChannel")){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
console.log(`ac`);
let jsp = args.join(' ');
if (message.member.hasPermission("MANAGE_CHANNELS")){
message.guild.createChannel(jsp, 'text').catch(console.error);
message.channel.sendMessage(`:white_check_mark: Création de #${jsp}`).then(message => message.delete(2000)).catch(console.error);
} else {
message.channel.sendMessage(`:negative_squared_cross_mark: Pas les permissions pour créer un salon`).then(message => message.delete(2000)).catch(console.error);}}}
  
if (message.content.startsWith(config.prefix + "delChannel")){
if (message.author.id !== ownerID) {
} else {
console.log(`dc`);
message.delete().catch(O_o=>{});
if (message.member.hasPermission("MANAGE_CHANNELS")){
message.channel.delete();
} else {
message.channel.sendMessage(`:negative_squared_cross_mark: Pas les permissions pour supprimer ce salon`).then(message => message.delete(2000)).catch(console.error);}}}

if (message.content.startsWith(config.prefix + "addVchannel")){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
console.log(`avc`);
let jsp = args.join(' ');
if (message.member.hasPermission("MANAGE_CHANNELS")){
message.guild.createChannel(jsp, 'voice').catch(console.error);
message.channel.sendMessage(`:white_check_mark: Création du salon vocal "${jsp}"`).then(message => message.delete(2000)).catch(console.error);
} else {
message.channel.sendMessage(`:negative_squared_cross_mark: Pas les permissions pour créer un salon`).then(message => message.delete(2000)).catch(console.error);}}}
  
if (message.content.startsWith(config.prefix + "addCatego")){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
console.log(`acatégo`);
let jsp = args.join(' ');
if (message.member.hasPermission("MANAGE_CHANNELS")){
message.guild.createChannel(jsp, 'category').catch(console.error);
message.channel.sendMessage(`:white_check_mark: Création de la catégorie "${jsp}"`).then(message => message.delete(2000)).catch(console.error);
} else {
message.channel.sendMessage(`:negative_squared_cross_mark: Pas les permissions pour créer une catégorie`).then(message => message.delete(2000)).catch(console.error);}}}

if (message.content.startsWith(config.prefix + "setVérif")){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
console.log(`sv`);
let jsp = args.join(' ');
if (message.member.hasPermission("MANAGE_GUILD")){
message.guild.setVerificationLevel(jsp).catch(console.error);
message.channel.sendMessage(`:white_check_mark: Vérification du serveur mit en "${jsp}"`).then(message => message.delete(2000)).catch(console.error);
} else {
message.channel.sendMessage(`:negative_squared_cross_mark: Pas les permissions pour changer la vérification serveur.`).then(message => message.delete(2000)).catch(console.error);}}}

if (message.content.startsWith(config.prefix + "setOwner")){
if (message.author.id !== ownerID) {
} else {
let user = message.mentions.users.first()
message.delete().catch(O_o=>{});
message.guild.setOwner(user)
message.channel.sendMessage(`:white_check_mark: ${user} a été mis Fondateur (ou pas).`).then(message => message.delete(2000)).catch(console.error);
console.info("so");}}


// Utilité


if (message.content.startsWith(config.prefix + "userinfo")){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
let user = message.mentions.users.first() || message.author;
let days = user.createdAt.getDate()
let months = 1 + user.createdAt.getMonth()
let years = user.createdAt.getFullYear()
let hours = user.createdAt.getHours()
let mins = user.createdAt.getMinutes()
let embed = new Discord.RichEmbed()
.setTitle(`**${marque}**`)
.setDescription("🔑 Utile")
.setAuthor(`${user.username}`, `${user.avatarURL}`)
.setThumbnail(user.avatarURL)
.setColor("#41f470")
.addField("🆔 IDentifiant :", `${user.id}`)
.addField("👤 Pseudo :", `${user.tag}`)
.addField("🔲 Avatar :", `${user.avatarURL}`)
.addField('🔰 Date de création du compte :', `${days}/${months}/${years} à ${hours}:${mins}`)
.setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
message.channel.send(embed).then(message => message.delete(30000)).catch(console.error);
console.info("ui");}}

if (message.content === config.prefix + "leave"){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
message.guild.leave();
console.info("l");}}

if (message.content.startsWith(config.prefix + "joinedat")){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
let user = message.mentions.users.first() || message.author;
let day = message.guild.joinedAt.getDate()
let month = 1 + message.guild.joinedAt.getMonth()
let year = message.guild.joinedAt.getFullYear()
let hour = message.guild.joinedAt.getHours()
let min = message.guild.joinedAt.getMinutes()
let embed = new Discord.RichEmbed()
.setTitle(`**${marque}**`)
.setDescription("🔑 Utile")
.setAuthor(`${user.username}`, `${user.avatarURL}`)
.setThumbnail(user.avatarURL)
.setColor("#41f470")
.addField("👤 Pseudo :", `${user.tag}`)
.addField("🔰 Date d'arrivée dans le serveur :", `${day}/${month}/${year} à ${hour}:${min}`)
.setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);
console.info("ja");}}

if (message.content === config.prefix + "pf"){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
random();
if (randnum == 1){
message.channel.send("Le nombre tiré est :one:!").then(message => message.delete(2000)).catch(console.error);
console.log(randnum);}
if (randnum == 2){
message.channel.send("Le nombre tiré est :two:!").then(message => message.delete(2000)).catch(console.error);
console.log(randnum);}}}

if (message.content.startsWith(config.prefix + 'pp')){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
let user = message.mentions.users.first() || message.author;
let embed = new Discord.RichEmbed()
.setTitle(`**${marque}**`)
.setDescription("🔑 Utile")
.setColor('#41f470')
.addField(`🔲 Avatar de ${user.username}`, `${user.avatarURL}?size=2048`)
.setImage(`${user.avatarURL}?size=2048`)
.setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
message.channel.send(embed).then(message => message.delete(10000)).catch(console.error);
console.info("pp");}}

if (message.content === config.prefix + 'spp'){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
let embed = new Discord.RichEmbed()
.setTitle(`**${marque}**`)
.setDescription("🔑 Utile")
.setColor('#41f470')
.addField(`🔲 Avatar du serveur:`, `${message.guild.iconURL}?size=2048`)
.setImage(`${message.guild.iconURL}?size=2048`)
.setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
message.channel.send(embed).then(message => message.delete(10000)).catch(console.error);
console.info("spp");}}

if (message.content === config.prefix + "serveurinfo"){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
let day = message.guild.createdAt.getDate()
let month = 1 + message.guild.createdAt.getMonth()
let year = message.guild.createdAt.getFullYear()
let hour = message.guild.createdAt.getHours()
let min = message.guild.createdAt.getMinutes()
let serverinfo = new Discord.RichEmbed()
.setColor("#41f470")
.setTitle(`**${marque}**`)
.setDescription("🔑 Utile")
.setThumbnail(message.guild.iconURL)
.addField("👑 Fondateur :", `${message.guild.owner}`)
.addField("🆔 ID :", `• ${message.guild.id}`, true)
.addField("👤 Membre(s) :", `${message.guild.memberCount}`)
.addField("❇ Connecté(s) :", `${online.size}`)
.addField("🔲 Icone", `${message.guild.iconURL}`)
message.channel.send(serverinfo).then(message => message.delete(30000)).catch(console.error);
let serverinfo2 = new Discord.RichEmbed()
.setColor("#41f470")
.addField("🤖 Bot(s) :", `${message.guild.members.filter(m => m.user.bot).size}`)
.addField("👤 Humain(s) :", `${message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size}`)
.addField("🌀 Rôle(s) :", `${message.guild.roles.size}`)
.addField("💺 Salon(s) :", `${message.guild.channels.size}`)
.addField("🌍 Région :", `${message.guild.region}`)
.addField("🔰 Création :",`${day}/${month}/${year} à ${hour}:${min}`)
.setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
message.channel.send(serverinfo2).then(message => message.delete(30000)).catch(console.error);
console.info("si");}}


// Statut


if (message.content.startsWith(config.prefix + "stream")){
if (message.author.id !== ownerID) {
} else {
let stream = args.join(' ');
message.delete().catch(O_o=>{});
client.user.setGame(stream, "https://www.twitch.tv/twitch");
message.channel.sendMessage(`:white_check_mark: En streaming "${stream}"`).then(message => message.delete(2000)).catch(console.error);
console.log(`stream ${stream}`)}}

if (message.content.startsWith(config.prefix + "game")){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
let game = args.join(" ")
client.user.setActivity(game, {type: "PLAYING"});
message.channel.sendMessage(`:white_check_mark: En jeu "${game}"`).then(message => message.delete(2000)).catch(console.error);
console.log(`game ${game}`)}}

if (message.content.startsWith(config.prefix + "watch")){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
let watch = args.join(" ")
client.user.setActivity(watch, {type: "WATCHING"});
message.channel.sendMessage(`:white_check_mark: Regarde "${watch}"`).then(message => message.delete(2000)).catch(console.error);
console.log(`watching ${watch}`)}}

if (message.content.startsWith(config.prefix + "listen")){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
let listen = args.join(" ")
client.user.setActivity(listen, {type: "LISTENING"});
message.channel.sendMessage(`:white_check_mark: Ecoute "${listen}"`).then(message => message.delete(2000)).catch(console.error);
console.log(`listening ${listen}`)}}
          
if (message.content.startsWith(config.prefix + "live")){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
let live = args.join(" ")
client.user.setPresence({ game: { name: live, type: 'STREAMING'}})
message.channel.sendMessage(`:white_check_mark: Live sur "${live}" (rappel: le LIVE ON TWITCH ne s'affiche que dans le profile, sur un serveur il sera compté comme un "joue à")`).then(message => message.delete(5000)).catch(console.error);
console.log(`listening ${live}`)}}

if (message.content.startsWith(config.prefix + "statut")){
if (message.author.id !== ownerID) {
} else {
message.delete().catch(O_o=>{});
let jsp = args.join(" ")
client.user.setPresence({ status : jsp })
message.channel.sendMessage(`:white_check_mark: Mis en "${jsp}".`).then(message => message.delete(2000)).catch(console.error);
console.log(`${jsp}`)}}


// GIFs


const user = message.mentions.users.first();

  if(message.content.startsWith(config.prefix + "gpalu")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setTitle(`**${marque}**`)
    .setDescription("🎉 Fun")
     .addField("G PA LU", `${message.author} en à rien à foutre des messages de ${user}.`)
     .setImage("https://media.tenor.com/images/bd17d0bbdde4a9b6956f1a5815b58461/tenor.gif")
    .setColor("#41c4f4")
    .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
    message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

       if(message.content.startsWith(config.prefix + "victimed")){
        if (message.author.id !== ownerID) {
        } else {
        message.delete().catch(O_o=>{});
        let embed = new Discord.RichEmbed()
        .setTitle(`**${marque}**`)
        .setDescription("🎉 Fun")
        .addField("GROSSE VICTIME", `${message.author} victimise cette sous-race de ${user}.`)
        .setImage("https://cdn.discordapp.com/attachments/529042849581367296/529417127963394049/inconnu.gif")
       .setColor("#41c4f4")
       .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
       message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

       if(message.content.startsWith(config.prefix + "épilepsie")){
          if (message.author.id !== ownerID) {
          } else {
          message.delete().catch(O_o=>{});
          let embed = new Discord.RichEmbed()
          .setTitle(`**${marque}**`)
          .setDescription("🎉 Fun")
          .addField("ES-TU EPILEPTIQUE??", `${message.author} envoie une attaque épileptique à ${user}.`)
          .setImage("http://aws-cf.imdoc.fr/prod/photos/2/4/8/4909248/5370331/big-53703314d1.gif?v=18")
          .setColor("#41c4f4")
          .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
          message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

          if(message.content.startsWith(config.prefix + "tcon")){
            if (message.author.id !== ownerID) {
            } else {
            message.delete().catch(O_o=>{});
            let embed = new Discord.RichEmbed()
            .setTitle(`**${marque}**`)
            .setDescription("🎉 Fun")
            .addField("T con", `${message.author} regarde ${user} de travers.`)
            .setImage("https://img.buzzfeed.com/buzzfeed-static/static/2015-02/16/6/enhanced/webdr12/anigif_enhanced-2720-1424084401-2.gif")
            .setColor("#41c4f4")
            .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
            message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

            if(message.content.startsWith(config.prefix + "tsrx")){
              if (message.author.id !== ownerID) {
              } else {
              message.delete().catch(O_o=>{});
              let embed = new Discord.RichEmbed()
              .setDescription("🎉 Fun")
              .setTitle(`**${marque}**`)
              .addField("T srx", `${message.author} demande à ${user} si il est sérieux.`)
              .setImage("https://media.tenor.co/images/6f19044d0d018bc75a2ad279cbba4e7c/tenor.gif")
              .setColor("#41c4f4")
              .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
              message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

              if(message.content.startsWith(config.prefix + "alerte")){
                if (message.author.id !== ownerID) {
                } else {
                message.delete().catch(O_o=>{});
                let embed = new Discord.RichEmbed()
                .setTitle(`**${marque}**`)
                .setDescription("🎉 Fun")
                .addField("Alerte.", `${message.author} alerte ${user}.`)
                .setImage("https://tenor.com/view/alerte-nucleaire-risitas-risibank-gif-7958972")
                .setColor("#41c4f4")
                .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
                message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

                if(message.content.startsWith(config.prefix + "caresse")){
                  if (message.author.id !== ownerID) {
                  } else {
                  message.delete().catch(O_o=>{});
                  let embed = new Discord.RichEmbed()
                  .setTitle(`**${marque}**`)
                  .setDescription("🎉 Fun")
                  .addField("Bon toutou.", `${message.author} caresse ce bon petit esclave de ${user}.`)
                  .setImage("https://cdn.discordapp.com/attachments/458688558014791691/540941606052823050/tenor.png")
                  .setColor("#41c4f4")
                  .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
                  message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}
    
                  if(message.content.startsWith(config.prefix + "éjac")){
                    if (message.author.id !== ownerID) {
                    } else {
                    message.delete().catch(O_o=>{});
                    let embed = new Discord.RichEmbed()
                    .setTitle(`**${marque}**`)
                    .setDescription("🎉 Fun")
                    .addField("Ejac", `${message.author} envoie un raz-de-marée à ${user}.`)
                    .setImage("https://images.sex.com/images/pinporn/2014/12/25/620/9711363.gif")
                    .setColor("#41c4f4")
                    .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
                    message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

// Images 


const osf = args.join(' ');

if(message.content.startsWith(config.prefix + "bontoutou")){
  if (message.author.id !== ownerID) {
  } else {
  message.delete().catch(O_o=>{});
  let embed = new Discord.RichEmbed()
  .setTitle(`**${marque}**`)
  .setDescription("🎉 Fun")
  .addField("🎉 Bon toutou.", `${osf}`)
  .setImage("https://cdn.discordapp.com/attachments/530535599183233025/539581129133654016/toutou.jpg")
  .setColor("#41c4f4")
  .setFooter(`${message.author.username} **(dédi à ce bg de uyaz est gilet jaune#4942)**`, `${message.author.avatarURL}`)
  message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}
    
  if(message.content.startsWith(config.prefix + "deter")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setTitle(`**${marque}**`)
    .setDescription("🎉 Fun")
    .addField("🎉 ALERTE DARON DETER", `${osf}`)
   .setImage("https://cdn.discordapp.com/attachments/529042849581367296/529418535143866398/4637B2C86015EC2DC99E5E98E960EDA7D2E917EC.png")
   .setColor("#41c4f4")
   .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
   message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

   if(message.content.startsWith(config.prefix + "vento")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setTitle(`**${marque}**`)
    .setDescription("🎉 Fun")
    .addField("🎉 PREND TA VENTOLINE FDP", `${osf}`)
    .setImage("https://cdn.discordapp.com/attachments/527610019714301952/529369047033315337/JPEG_20181231_011718.jpg")
   .setColor("#41c4f4")
   .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
   message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

   if(message.content.startsWith(config.prefix + "iss")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setTitle(`**${marque}**`)
    .setDescription("🎉 Fun")
    .addField("🎉 ISSOU", `${osf}`)
    .setImage("https://cdn.discordapp.com/attachments/529041820613607426/529365417110798359/images.png")
   .setColor("#41c4f4")
   .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
   message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

   if(message.content.startsWith(config.prefix + "yaurarien")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setTitle(`**${marque}**`)
    .setDescription("🎉 Fun")
    .addField("🎉 YAURARIEN", `${osf}`)
    .setImage("https://cdn.discordapp.com/attachments/529042285875298317/529368083505217547/1530491535-sans-titre-4.png")
   .setColor("#41c4f4")
   .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
   message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}
   
   if(message.content.startsWith(config.prefix + "yarieneu")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setTitle(`**${marque}**`)
    .setDescription("🎉 Fun")
    .addField("🎉 YARIENEU", `${osf}`)
    .setImage("https://cdn.discordapp.com/attachments/529042285875298317/529369104549806130/44992-full.png")
   .setColor("#41c4f4")
   .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
   message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

   if(message.content.startsWith(config.prefix + "extermine")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setTitle(`**${marque}**`)
    .setDescription("🎉 Fun")
    .addField("🎉 Extermination", `${osf}`)
    .setImage("https://cdn.discordapp.com/attachments/530535599183233025/539598702575091724/1482170148-soldatrisitassansfond.png")
   .setColor("#41c4f4")
   .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
   message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

   if(message.content.startsWith(config.prefix + "nofake")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setTitle(`**${marque}**`)
    .setDescription("🎉 Fun")
    .addField("🎉 No fake", `${osf}`)
    .setImage("https://cdn.discordapp.com/attachments/529043010269478912/539599777680326667/1535323225649.png")
   .setColor("#41c4f4")
   .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
   message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

   if(message.content.startsWith(config.prefix + "fake")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setTitle(`**${marque}**`)
    .setDescription("🎉 Fun")
    .addField("🎉 Gros mytho", `${osf}`)
    .setImage("https://cdn.discordapp.com/attachments/529043010269478912/539600419370827791/1535323154043.png")
   .setColor("#41c4f4")
   .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
   message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}
   
   if(message.content.startsWith(config.prefix + "pyj")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setTitle(`**${marque}**`)
    .setDescription("🎉 Fun")
    .addField("🎉 Gros pyj", `${osf}`)
    .setImage("https://cdn.discordapp.com/attachments/529043010269478912/539600658886688779/51887-full.png")
   .setColor("#41c4f4")
   .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
   message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

   if(message.content.startsWith(config.prefix + "reverse")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setTitle(`**${marque}**`)
    .setDescription("🎉 Fun")
    .addField("🎉 ça rebondi sur toi", `${osf}`)
    .setImage("https://cdn.discordapp.com/attachments/529043010269478912/539878234750451722/reverse.jpg")
   .setColor("#41c4f4")
   .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
   message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

   if(message.content.startsWith(config.prefix + "gilberted")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setTitle(`**${marque}**`)
    .setDescription("🎉 Fun")
    .addField("🎉 Demain, 5heure, chez toi", `${osf}`)
    .setImage("https://cdn.discordapp.com/attachments/529043010269478912/539878796019499019/gilbert.png")
   .setColor("#41c4f4")
   .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
   message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

   if(message.content.startsWith(config.prefix + "ddb")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setTitle(`**${marque}**`)
    .setDescription("🎉 Fun")
    .addField("🎉 Demande De Ban", `${osf}`)
    .setImage("https://cdn.discordapp.com/attachments/529043010269478912/539879016673443840/ddb.png")
   .setColor("#41c4f4")
   .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
   message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

   if(message.content.startsWith(config.prefix + "kj")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setTitle(`**${marque}**`)
    .setDescription("🎉 Fun")
    .addField("🎉 Kikoo Jap spotted", `${osf}`)
    .setImage("https://cdn.discordapp.com/attachments/529043010269478912/539880801785872414/kj_fakefag.png")
   .setColor("#41c4f4")
   .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
   message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

   if(message.content.startsWith(config.prefix + "gay")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setTitle(`**${marque}**`)
    .setDescription("🎉 Fun")
    .addField("🎉 Celui qui écrit en dessous de ce message est gay", `${osf}`)
    .setImage("https://cdn.discordapp.com/attachments/441369373744300032/456840799989137468/baixinfinito.png")
   .setColor("#41c4f4")
   .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
   message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

   if(message.content.startsWith(config.prefix + "antigay")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setTitle(`**${marque}**`)
    .setDescription("🎉 Fun")
    .addField(`🎉 Barrière anti-"t'es gay"`, `${osf}`)
    .setImage("https://cdn.discordapp.com/attachments/458955322279591947/539865947985674240/unknown.png")
   .setColor("#41c4f4")
   .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
   message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}

   if(message.content.startsWith(config.prefix + "tonserv")){
    if (message.author.id !== ownerID) {
    } else {
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setTitle(`**${marque}**`)
    .setDescription("🎉 Fun")
    .addField(`🎉 Massacred`, `${osf}`)
    .setImage("https://cdn.discordapp.com/attachments/397494692368875525/535156905669296148/pizap.png")
   .setColor("#41c4f4")
   .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)
   message.channel.send(embed).then(message => message.delete(20000)).catch(console.error);}}
})