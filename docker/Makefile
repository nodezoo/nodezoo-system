build :
	$(MAKE) -C ./shared build
	$(MAKE) -C ./stats/graphite-statsd build
	$(MAKE) -C ./logstash build
	$(MAKE) -C ../../web/docker/stage build
	$(MAKE) -C ../../search/docker/stage build
	$(MAKE) -C ../../suggest/docker/stage build
	$(MAKE) -C ../../info/docker/stage build
	$(MAKE) -C ../../npm/docker/stage build
	$(MAKE) -C ../../github/docker/stage build
	$(MAKE) -C ../../repl/docker/stage build
	$(MAKE) -C ../../validate/docker/stage build

.PHONY : build


