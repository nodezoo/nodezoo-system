![Nodezoo][Logo]

# nodezoo-system

- __Lead:__ [Dean McDonnell][Lead]
- __Sponsor:__ [nearForm][Sponsor]

This repo contains all the required config to spin up a [Nodezoo][] system with [Vidi][] and
[Concorda][] attached. The included services represents a production level microservices system
and includes monitoring and user management. Follow the instructions below to set up the system
on your machine.

Nodezoo is a search engine for node modules. It is an example of a real-world service built using
Node.js microservices. Each microservice is published in its own github repository along with all
of the necessary config to run the system locally or live . The codebase is intended to be used as
an example, and as a starting point for your own projects.

Nodezoo comes with two additional sub systems. These are Vidi, a metrics collection and charting
service and Concorda, a user management system.

## Installation Guide

### 1. Install fuge
To make use of this repo you need to have fuge installed, you can do this via npm,

```
npm install -g fuge
```

### 2. Install Docker
You need the ability to run docker and for it to be active in your session to run this system.
Please see Docker's [instructions][docker] for more detail on how to install it for your system. To
test if docker is available for fuge to make use of, type the following into your terminal,

```
docker ps -a
```

If you are prompted with an error saying cannot connect to docker daemon, run the following command:

```
docker-machine start default // your machine name may not be default use docker-machine ls to confirm
```

If this command doesn't return a TLS connection issue you are good to go otherwise the following
command should connect Docker to your session,

```
eval $(docker-machine env default)
```

Try the docker command above again, you should now see some form of output and not the original TLS
error.

Running this system causes containers to be created and ran via docker. If you need to stop and/or
remove docker containers, the commands are as follows

```
docker stop $(docker ps -a)
docker rm $(docker ps -a)
```

### 3. Get the System
Each dependent repo will be cloned automatically, to get started clone this repo locally,

```
git clone https://github.com/nodezoo/nodezoo-system
```

### 4. Install your dependencies
In the `./nodezoo-system` folder run,

```
npm install
```

### 5. Build the system
In the `./nodezoo-system` folder run,

```
fuge build fuge/system.yml
```

### 6. Start the system
In the `./nodezoo-system` folder run,

```
fuge shell fuge/system.yml
```

___Note:___ You can run infrastructure and services separately using `infrastructure.yml` or
`services.yml` over `system.yml`. All three files are also compatible with `docker-compose` should
you wish to run without fuge.

__Note:__ Nodezoo uses meshing technology to auto bind microservices without the need for port
numbers. However, web apps are always available on the following ports.

- Nodezoo - `8000`
- Vidi - `3000`
- Concorda - `3050`


## Contributing
The [NodeZoo][] org encourages __open__ and __safe__ participation.

- __[Code of Conduct][CoC]__

If you feel you can help in any way, be it with documentation, examples, extra testing, or new
features please get in touch.

## License
Copyright (c) 2016, Dean McDonnell and other contributors.
Licensed under [MIT][Lic].


[Logo]: https://raw.githubusercontent.com/nodezoo/nodezoo-org/master/assets/logo-nodezoo.png
[Lead]: https://github.com/mcdonnelldean
[Sponsor]: http://www.nearform.com/
[CoC]: https://github.com/nodezoo/nodezoo-org/blob/master/CoC.md
[Lic]: ./LICENSE

[Nodezoo]: https://github.com/rjrodger/nodezoo
[Concorda]: https://github.com/nearform/concorda
[Vidi]: https://github.com/vidi-insights/vidi-dashboard


[docker]: ./
