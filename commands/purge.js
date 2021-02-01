module.exports = {
	name: 'purge',
	description: 'purge messages in a channel',
	execute(message, args) {
		if (message.member.roles.cache.has('Administrator')) {
			const amount = parseInt(args[0]) + 1;

			if (isNaN(amount)) {
				return message.reply('that is not a valid number.');
			}
			else if (amount <= 1 || amount > 100) {
				return message.reply('you need to input a number between 1 and 99');
			}

			message.channel.bulkDelete(amount, true).catch(err =>{
				console.error(err);
				message.channel.send('there was an error trying to purge messages in this channel');
			});
		}
		else {
			return message.channel.send(`You don't have the required permissions, ${message.author}`);
		}
	},
};
