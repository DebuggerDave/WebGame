node server.js &
touch serverPID.txt
if cat serverPID.txt | grep ''  > /dev/null
then
	if ps -p $(cat serverPID.txt) | grep 'node' > /dev/null
	then
		kill -SIGTERM "$!"
	else
		echo "$!" > serverPID.txt
	fi
else
	echo "$!" > serverPID.txt
fi
