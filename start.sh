DIRNAME=$(dirname "$0")/
node $DIRNAME/src/server.js &
touch pid.txt
if cat pid.txt | grep ''  > /dev/null
then
	if ps -p $(cat pid.txt) | grep 'node' > /dev/null
	then
		kill -SIGTERM "$!"
	else
		echo "$!" > pid.txt
	fi
else
	echo "$!" > pid.txt
fi
