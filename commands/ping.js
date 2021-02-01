const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	cooldown: 5,
	description: 'Pong',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Pong');
		message.channel.send(embed);
	},
};
