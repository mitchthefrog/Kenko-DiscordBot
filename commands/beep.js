const Discord = require('discord.js');

module.exports = {
	name: 'beep',
	description: 'Boop',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
			.setTitle('Boop');
		message.channel.send(embed);
	},
};
