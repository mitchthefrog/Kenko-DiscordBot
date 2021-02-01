module.exports = {
	name: 'ban',
	description: 'Bans a user',
	execute(message, args) {
		if (args.length > 0) {
			if (message.member.roles.cache.has('Administrator')) {
				const user = message.mentions.members.first();
				message.guild.members.ban(user);
				message.channel.send(`${user} has been banned.`);
			}
			else {
				message.channel.send(`${message.author}, you do not have permission to run this command.`);
			}
		}
		else {
			return message.reply('please specify someone to ban');
		}
	},
};
