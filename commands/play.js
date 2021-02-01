module.exports = {
	name: 'play',
	cooldown: 5,
	description: 'Plays a youtube video with a link',
	execute(message, args) {
		const ytdl = require('ytdl-core');
		const voiceChannelname = message.member.voice.channel;

		message.member.voice.channel.join().then(connection => {
			const stream = ytdl(args[0], { filter: 'audioonly' });
			const dispatcher = connection.play(stream);

			message.channel.send(`Now playing link in ${voiceChannelname} voice channel`);

			dispatcher.on('finish', () => message.member.voice.channel.leave());

		});
	},
};
