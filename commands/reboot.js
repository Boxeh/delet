exports.run = (client, message) => {
  message.channel.send('Are you sure you want to reboot me?\n\nReply with \`cancel\` to **abort** the reboot. The reboot will self-abort in 30 seconds.');
  return message.channel.awaitMessages(m => m.author.id === message.author.id, {
    'errors': ['time'],
    'max': 1,
    time: 30000
  }).then(resp => {
    if (!resp) return;
    resp = resp.array()[0];
    let validAnswers = ['yes', 'y', 'no', 'n', 'cancel'];
    if (validAnswers.includes(resp.content)) {
      if (resp.content === 'cancel' || resp.content === 'no' || resp.content === 'n') {
        return message.channel.send('**Aborting** reboot.');
      } else if (resp.content === 'yes' || resp.content === 'y') {
        client.destroy().then(() => {
          process.exit();
        }).catch(console.error);
      }
    } else {
      message.channel.send(`Only \`${validAnswers.join('`, `')}\` are valid, please supply one of those.`).catch(()=>console.error);
    }
  }).catch(() => {
    console.error;
    message.channel.send('Reboot timed out.');
  });
};

exports.conf = {
  enabled: true,  
  guildOnly: true,
  aliases: ['restart', 'abort'],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Reboots the bot.',
  usage: 'reboot'
};
