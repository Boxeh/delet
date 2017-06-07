# delet-docs
Documentation and readme info regarding the Delet bot for Discord.

# 'delet' bot for Discord

[![N|Solid](https://vgy.me/GaLwEg.png)](https://vgy.me/43As1f.png)

delet is a multipurpose bot with planned features including (but not limited to) moderation, music, webhooking and fun commands to play around with.

Key notes:

  - The bot is currently private to one guild and cannot be added to any other guilds.
  - Coded in JavaScript.
  - Uses the Discord.js library (https://discord.js.org/, https://github.com/hydrabolt/discord.js/)

# Unique features
Similar to many moderation bots, this bot does have the typical `ban`, `kick` and `purge` commands, but it also has quite a few useful commands. These include:

  - Lockdown: locks a channel by preventing users from sending messages in it by *automagically* changing the channel overrides appropriately. The lockdown can be released at any time, and its time of expiry can be set in seconds, hours, or minutes.
  - Mute: renders the specified user's permissions to send messages across the entire guild insufficient.
  - Warn: sends a warning in a DM to the specified user, with a reason for the warning.

Note that the bot is still in development, so many features are still being added to it. 

> The "delet" bot aims to provide a simplistic
> yet functional and effective moderation system
> as well as solutions to keep the guild as 
> interactive and enjoyable a place as possible.
> If you're anti-fun, a feature may be added in the
> future (once the bot is public) to disable certain
> command categories locally.

### Packages

Packages currently used in 'delet' include:

* [discord.js](https://discord.js.org/#/)
* [Node-Opus](https://www.npmjs.com/package/node-opus)
* [Request promise](https://www.npmjs.com/package/request-promise)
* [Erlpack](https://www.npmjs.com/package/erlpack)
* [Node.js]
* [yt-dl-core](https://github.com/fent/node-ytdl-core)
* [OpusScript](https://www.npmjs.com/package/opusscript)
* [return-deep-diff](https://www.npmjs.com/package/return-deep-diff)
* [Moment](https://www.npmjs.com/package/moment)
* [Winston](https://www.npmjs.com/package/winston)

and a few other useful packages.
