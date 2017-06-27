exports.run = (client, message) => {
    if (message.content === ("%isprime 2")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 3")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 5")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 7")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 11")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 13")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 17")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 19")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 23")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 29")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 31")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 37")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 41")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 43")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 47")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 53")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 59")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 61")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 67")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 71")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 73")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 79")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 83")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 89")) message.channel.send("That is a prime number.");
    if (message.content === ("%isprime 97")) message.channel.send("That is a prime number.");

    if (!message.content === ("%isprime 2")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 3")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 5")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 7")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 11")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 13")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 17")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 19")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 23")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 29")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 31")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 37")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 41")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 43")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 47")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 53")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 59")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 61")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 67")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 71")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 73")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 79")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 83")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 89")) message.channel.send("That is not a prime number.");
    if (!message.content === ("%isprime 97")) message.channel.send("That is not a prime number.");
    };

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["prime"],
    permLevel: 0
};

exports.help = {
    name: "isprime",   
    description: "Checks whether a number (up to 100) is prime or not.",
    usage: "isprime [number]"
};