module.exports = {
	name: 'kick',
	description: 'Kicks a user',
	execute(message, args) {
		if (args.length > 0) {
			if (message.member.roles.cache.has('Administrator')) {
				const user = message.mentions.members.first();
				user.kick()	;
				message.channel.send(`${user} has been kicked.`);
			}
			else {
				message.channel.send(`${message.author}, you do not have permission to run this command.`);
			}
		}
		else {
			return message.reply('please specify someone to kick');
		}
	},
};
