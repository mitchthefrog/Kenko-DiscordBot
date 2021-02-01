const Discord = require('discord.js');

module.exports = {
	name: 'user info',
	description: 'user info',
	execute(message, args) {
		const UserInfoEmbed = new Discord.MessageEmbed()
			.setTitle('User Info')
			.setColor('FFD700')
			.addFields(
				{
					name: 'Username',
					value: `${message.author.username}`,
				},
				{
					name: 'ID',
					value: `${message.author.id}`,
				},
			);
		message.channel.send(UserInfoEmbed);
	},
};
