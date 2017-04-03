build :
	$(MAKE) -C ./shared build
	$(MAKE) -C ./stats/graphite-statsd build
	$(MAKE) -C ../../nodezoo-web/docker/stage build
	$(MAKE) -C ../../nodezoo-search/docker/stage build
	$(MAKE) -C ../../nodezoo-suggest/docker/stage build
	$(MAKE) -C ../../nodezoo-info/docker/stage build
	$(MAKE) -C ../../nodezoo-npm/docker/stage build
	$(MAKE) -C ../../nodezoo-github/docker/stage build
	$(MAKE) -C ../../nodezoo-repl/docker/stage build
	$(MAKE) -C ../../nodezoo-validate/docker/stage build

.PHONY : build


