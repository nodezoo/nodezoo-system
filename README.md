![Nodezoo][Logo]

# nodezoo-system

- __Lead:__ [Dean McDonnell][Lead]
- __Sponsor:__ [nearForm][Sponsor]

This repo contains all the required config to spin up a [Nodezoo][] system with [Vidi][] and
[Concorda][] attached. The included services represents a production level microservices system
and includes monitoring and user management. Follow the instructions below to set up the system
on your machine

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
Each dependent repo must be cloned into the same root directory. Your complete system should look like this,

```
/some-folder
--/nodezoo-system
--/nodezoo
--/nodezoo-metrics
--/nodezoo-web
--/nodezoo-info
--/nodezoo-search
--/nodezoo-github
--/nodezoo-npm
--/concorda-dashboard
--/vidi-dashboard
```

#### 3 a. Get the repos
The links for each required repo are listed below,

- [nodezoo][]
- [nodezoo-metrics][]
- [nodezoo-web][]
- [nodezoo-info][]
- [nodezoo-search][]
- [nodezoo-github][]
- [nodezoo-npm][]
- [concorda-dashboard][]
- [vidi-dashboard][Vidi]

If you have git available at the command line you can clone each repo using commands in the form,

```
git clone https://github.com/[USERNAME]/[REPONAME]
```

For example to clone nodezoo from rjrodger:

```
git clone https://github.com/rjrodger/nodezoo
```

or concorda from nearform:

```
git clone https://github.com/nearform/concorda
```

#### 3 b. Set your branches
While we are working on cleaning these repos up we have had set up some temporary branches for
certain repos, before you start please ensure each repo is on the correct branch listed below. As
soon as our improvements are in place we will move back to all repos working via the `live` branch
as this is where the production version of the system will live going forward.

- nodezoo  `live`
- nodezoo-system `master`
- nodezoo-metrics  `live`
- nodezoo-web `live`
- nodezoo-info `live`
- nodezoo-search `live`
- nodezoo-github `live`
- nodezoo-npm `live`
- concorda-dashboard `master`
- vidi-dashboard `master`


#### 3 c. Install your dependencies
In each repository's folder run the following command:

```
npm install
```

Then go into the folder nodezoo/system and run:

```
npm install
```

This will install the dependencies.

#### 3 d. Build required assets
In the folders concorda, vidi-dashboard, and nodezoo-web use the following command in each:

```
npm run build
```

### 4. Start the system

1. navigate to `nodezoo-system`
2. run `fuge shell system.yml`

___Note:___ You can run infrastructure and services separately using `infrastructure.yml` or
`services.yml` over `system.yml`. All three files are also compatible with `docker-compose` should
you wish to run without fuge.

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

[nodezoo]: https://github.com/rjrodger/nodezoo
[nodezoo-metrics]: https://github.com/nodezoo/nodezoo-metrics
[nodezoo-web]: https://github.com/rjrodger/nodezoo-web
[nodezoo-info]: https://github.com/rjrodger/nodezoo-info
[nodezoo-search]: https://github.com/rjrodger/nodezoo-search
[nodezoo-github]: https://github.com/rjrodger/nodezoo-github
[nodezoo-npm]: https://github.com/rjrodger/nodezoo-npm
[concorda-dashboard]: https://github.com/nearform/concorda


[Vidi]: https://github.com/vidi-insights/vidi-dashboard


[docker]: ./
