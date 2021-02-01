const Discord = require('discord.js');

module.exports = {
	name: 'server',
	description: 'server info',
	execute(message, args) {
		const ServerEmbed = new Discord.MessageEmbed()
			.setColor('0000FF')
			.setTitle('Server Info')
			.addFields(
				{
					name: 'Server Name',
					value: `${message.guild.name}`,
				},
				{
					name: 'Total Members',
					value: `${message.guild.memberCount}`,
					inline: true,
				},
				{
					name: 'Region',
					value: `${message.guild.region}`,
				},
				{
					name: 'Creation Date',
					value: `${message.guild.createdAt}`,
				},
			);

		message.channel.send(ServerEmbed);
	},
};
