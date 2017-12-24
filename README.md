# MafiaBot
Discord Bot for Mafia

## Developers
 - Monacraft
 - Virus

## Use
`!start` to begin game.
Most interactions occur through reactions, typing and Dm's

## For Dev's
Main Files:
 - *globals.js*:    Code at the start of the compiled app and included in each file (for ease of coding). Note should include a `// [Global]` for compiler
 - *sources.txt*:   Specifies files to compile
 - *source*:        Directory for storing sources (including images)
 - *app.js*:        Compiled file (generated and updated by the `.bat`)
 - **compile.bat**: Dedicated compiler, press any key to update. 
 - *backups*:       Copy of all sources mid compile incase batch is interupted

Existing Sources:
 - *bot.js*:        All interface while game is not running
 - *game.js*:       Main game object and base gamecode