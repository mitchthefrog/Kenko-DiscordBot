module.exports = {
	name: 'pause',
	cooldown: 5,
	aliases: ['resume'],
	description: 'Pauses or resumes the current playing link',
	execute(message, args) {
		if(message.guild.me.voice.channel == null) {return message.channel.send('You need to be in a voice channel to pause/resume music.');}

		if (message.guild.me.voice.channel.id != message.member.voice.channel.id) return message.channel.send('You have to be in the same voice channel as me to use this command');
		// eslint-disable-next-line max-statements-per-line
		if(message.guild.me.voice.connection.dispatcher != null) {
			if(message.guild.me.voice.connection.dispatcher.paused) {
				message.guild.me.voice.connection.dispatcher.resume();
			}
			else{message.guild.me.voice.connection.dispatcher.pause();}
		}
		return message.channel.send(`Player is now ${message.playing ? 'resumed' : 'paused'}.`);
	},
};
