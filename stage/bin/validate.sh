echo '# test'

node travis.js

echo '# msgs'

curl 'http://localhost:11000/act?role=validate&cmd=validate'

echo
echo '# perf'

rm -f perf.info.tmp
echo 'deployrisk.perf.info:'$(ab -n 100 -c 10 http://localhost:8000/info/nid | grep "90%" | sed -e "s/ \{1,\}/ /g" | cut -d " " -f 3)'|g' > perf.info.tmp
cat perf.info.tmp
cat perf.info.tmp | nc -u -w0 127.0.0.1 8125

rm -f perf.index.tmp
echo 'deployrisk.perf.index:'$(ab -n 100 -c 10 http://localhost:8000/ | grep "90%" | sed -e "s/ \{1,\}/ /g" | cut -d " " -f 3)'|g' > perf.index.tmp
cat perf.index.tmp
cat perf.index.tmp | nc -u -w0 127.0.0.1 8125

rm -f perf.query.tmp
echo 'deployrisk.perf.query:'$(ab -n 100 -c 10 http://localhost:8000/api/query?q=nid | grep "90%" | sed -e "s/ \{1,\}/ /g" | cut -d " " -f 3)'|g' > perf.query.tmp
cat perf.query.tmp
cat perf.query.tmp | nc -u -w0 127.0.0.1 8125
