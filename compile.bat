@echo off
title COMPILER
color 0b
set global=0
for /f %%a in (global.js) do (set /a global=global+1)

:loop
cls
Echo Global line count at %global%
copy /Y "source" "backups"
for /f "delims=" %%a in (sources.txt) do (
copy %%a "%%~a.temp"
type "global.js" > %%a
Echo. >> %%a
type "%%~a.temp" | findstr /l /v "[Global]" >> %%a
del "%%~a.temp"
)

>app.js (
Echo // Compiled at %time:~0,5% %date% by %username%
Echo.
Echo // GLOBAL LINES
type global.js
Echo.
for /f "delims=" %%a in (sources.txt) do (
Echo.
Echo // =======================================
Echo // START OF NEW FILE:
Echo // %%a
Echo.
REM for /f "skip=%global% delims=" %%b in (%%~a) do (Echo %%b)
type %%a | findstr /l /v "[Global]"
Echo.
Echo.
Echo // EOF: %%a
Echo // =======================================
Echo.
))

Echo Compiled!
Echo Press any key to compile again...
>nul pause

goto :loop
endlocal