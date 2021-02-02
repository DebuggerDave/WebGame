touch pid.txt
if cat pid.txt | grep ''  > /dev/null
then
    kill -SIGTERM $(cat pid.txt) && rm pid.txt
fi
