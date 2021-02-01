const fs = module.require('fs');

module.exports = {
	name: 'mute',
	cooldown: 5,
    description: 'mutes a user',
    async execute(message, args) {
        let toMute = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!toMute) return message.channel.send('You did not specify a user mention or ID.');
        if(!toMute.id === message.author.id) return message.channel.send('You can not mute yourself.');
        if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send('You can not mute a member that is equal to or higher than yourself.');

        let mutedRole = message.guild.roles.find(mR => mR.name === 'Muted');

        if(!mutedRole) {
            try {

                mutedRole = await message.guild.createRole({
                    name: 'Muted',
                    color: '#000000',
                    permissions: []
                });

                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(mutedRole, {
                        Send_Messages: false,
                        Add_Reactions: false
                    })
                });

            
            } catch(e) {
                console.log(e.stack);
            }
        }

        if(toMute.roles.has(mutedRole.id)) return message.channel.send('This user is already muted.');

        

        message.muted[toMute.id] = {
            guild: message.guild.id,
            time: Date.now() = parseInt(args[1]) * 1000
        }

        await toMute.addRole(mutedRole);

        fs.writeFile('./muted.json', JSON.stringify(bot.muted, null, 4), err => {
            if (err) throw err;
            message.channel.send(`I have muted ${toMute.user.tag}.`);
        });
    }
}
