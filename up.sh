rm ./dist/*
scp -t alarm@192.168.1.70 'rm WebGame/dist/*'
npx webpack-cli
scp -r ./dist alarm@192.168.1.70:~/WebGame/

