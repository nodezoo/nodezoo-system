# docker run -d -p 9200:9200 -e "http.host=0.0.0.0" -e "transport.host=127.0.0.1" -e "xpack.security.enabled=false" docker.elastic.co/elasticsearch/elasticsearch:5.2.2
node ../../nodezoo-web/srv/web-dev.js &
node ../../nodezoo-info/srv/info-dev.js &
node ../../nodezoo-npm/srv/npm-dev.js &
node ../../nodezoo-suggest/srv/npm-suggest.js &
node ../../nodezoo-search/srv/search-dev.js &
