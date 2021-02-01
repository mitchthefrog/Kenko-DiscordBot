module.exports = {
	name: 'unban',
	description: 'Unbans a user (with user ID)',
	execute(message, args) {
		if (args.length > 0) {
			if (message.member.roles.cache.has('674032613068898354')) {
				const id = args[0];
				message.guild.members.unban(id);
				message.channel.send(`${id} has been unbanned.`);
			}
			else {
				message.channel.send(`${message.author}, you do not have permission to run this command.`);
			}
		}
		else {
			return message.reply('please specify someone to unban');
		}
	},
};
