![Nodezoo][Logo]

# nodezoo-system

- __Lead:__ [Dean McDonnell][Lead]
- __Sponsor:__ [nearForm][Sponsor]

Nodezoo is a search engine for node modules. The full system currently fetches data from NPM, Github and Travis-CI. It is an example of a real-world service built using
Node.js micro-services. Each micro-service is published in its own github repository along with all
of the necessary config to run the system locally or live . The codebase is intended to be used as
an example, and as a starting point for your own projects.

This repo contains all the required config to spin up a [Nodezoo][] system. The included services
represents a production level micro-services system.
Follow the instructions below to set up the system on your machine.

#### Nodezoo Search Page
![Search Page][searchPage]
- The search page shows a minimal, but adequate, amount of information about a module.
  - Module description
  - If it exists on NPM, GitHub or Travis-CI then their respective icons are shown, accompanied by its most recent build status if available
  - The amount of watchers, stars and forks the modules repository has on GitHub

#### Nodezoo Information Page
![Information Page][infoPage]
- The information page is much more detailed than the search page, neatly displaying all of the important information regarding a module. If there is no NPM, GitHub or Travis-CI information available then the corresponding tile will not be visible. The three micro-services used to retrieve the data are:
  - [nodezoo-npm][]
  - [nodezoo-github][]
  - [nodezoo-travis][]

## Installation Guide

### 1. Install fuge
To make use of this repo you need to have fuge installed, you can do this via npm,

```
npm install -g fuge
```
__Note:__ Fuge 0.6.1 or later is required

### 2. Install Docker
You need the ability to run docker and for it to be active in your session to run this system.
Please see Docker's [instructions][docker] for more detail on how to install it for your system. To
test if docker is available for fuge to make use of, first type the following command to make the docker cli and daemon play nicely,

```
eval $(docker-machine env default)
```

Now, lets check if docker is available.


```
docker ps -a
```

If you are prompted with an error saying cannot connect to docker daemon, run the following command:

```
docker-machine start default
```

If this command doesn't return a TLS connection issue you are good to go.

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

Copy the `./sample.env` file to `./system.env` and edit the environment variables as needed.

In the `./nodezoo-system` folder run,

```
fuge build fuge/system.yml
```

### 6. Insert GitHub token
For the GitHub service to work you must create the file system.env in the fuge/env directory and copy the entire contents of sample.env to it. You then insert your GitHub personal access token into system.env.

### 7. Start the infrastructure
In the `./nodezoo-system` folder, in a second terminal window run,

```
docker-compose -f fuge/infrastructure.yml up
```

### 8. Start the system
In the `./nodezoo-system` folder run,

```
fuge shell fuge/system.yml
```

Once the fuge shell opens, type aptly named `start` command to launch the infastructure.

__Note:__ You must run infrastructure using `infrastructure.yml` __before__ running the system.

__Note:__ The Nodezoo web app is available at `8000`.

## Development

To set up a development environment with cloned copies of all the repositories run :

```
make dev-setup
```

All the services will be checked out into `./services` and will use `npm link` to place symlinks
in the node_modules folder.

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
[docker]: https://docs.docker.com/engine/installation/
[searchPage]: https://github.com/nodezoo/nodezoo-org/blob/master/assets/search-page.png
[infoPage]: https://github.com/nodezoo/nodezoo-org/blob/master/assets/info-page.png
[nodezoo-npm]: https://github.com/nodezoo/nodezoo-npm
[nodezoo-github]: https://github.com/nodezoo/nodezoo-github
[nodezoo-travis]: https://github.com/nodezoo/nodezoo-travis
