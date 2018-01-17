live-server public/ --browser=chromium &
babel src/app.jsx --out-file=public/js/app.js --presets=env,react --watch &
code . &

