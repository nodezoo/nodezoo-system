![Nodezoo](https://github.com/nodezoo/nodezoo-org/blob/master/assets/logo-nodezoo.png)
# Fuge-runner

- __Lead:__ [Dean McDonnell][Lead]
- __Sponsor:__ [nearForm][]

This repo contains all the required config to spin up a [Nodezoo][] system with [Vidi][] and [Concorda][] attached. To get started, clone this repo and follow the steps below.

## Install fuge
To make use of this repo you need to have fuge installed, you can do this via npm,

```
npm install -g fuge
```

## Install Docker
You need the ability to run docker and for it to be active in your session to run this system. Please see Docker's [instructions][docker] for more detail on how to install it for your system. To test if docker is available for fuge to make use of, type the following into your terminal,

```
docker ps -a
```
If you are prompted with an error saying cannot connect to docker daemon, run the following command:

```
docker-machine start default
```

If this command doesn't return a TLS connection issue you are good to go otherwise the following command should connect Docker to your session,

```
eval $(docker-machine env default) // your machine name may not be default use docker-machine ls to confirm
```
Try the docker command above again, you should now see some form of output and not the original TLS error.

Running this system causes containers to be created and ran via docker.
If you need to stop and/or remove docker containers, the commands are as follows
```
docker stop $(docker ps -a)
docker rm $(docker ps -a)
```

## Install the system
Each dependent repo must be cloned into the same root directory. Your complete system should look like this,

```
/some-folder
--/vidi-concorda-nodezoo-system
--/nodezoo
--/nodezoo-web
--/nodezoo-info
--/nodezoo-search
--/nodezoo-github
--/nodezoo-npm
--/concorda
--/vidi-dashboard
```

### Get the repos
The links for each required repo are listed below,

- [Nodezoo][]
- [Nodezoo web][]
- [Nodezoo info][]
- [Nodezoo search][]
- [Nodezoo github][]
- [Nodezoo npm][]
- [Concorda][]
- [Vidi-Dashboard][Vidi]

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

### Set your branches
While we are working on cleaning these repos up we have had set up some temporary branches for certain repos, before you start please ensure each repo is on the correct branch listed below. As soon as our improvements are in place we will move back to all repos working via the `live` branch as this is where the production version of the system will live going forward.

- Nodezoo  `live`
- Nodezoo-web `to-redux`
- Nodezoo-info `live`
- Nodezoo-search `live`
- Nodezoo-github `live`
- Nodezoo-npm `live`
- Concorda `master`
- vidi-dashboard `master`
- vidi-concorda-nodezoo-system `master`

## Install your dependencies
In each repository's folder run the following command:
```
npm install
```
Then go into the folder nodezoo/system and run:
```
npm install
```
This will install the dependencies.

## Run build

In the folders concorda, vidi-dashboard, and nodezoo-web use the following command in each:
```
npm run build
```

## Start the system

1. navigate to `vidi-concorda-nodezoo-system`
2. run `fuge shell system.yml`

___Note:___ You can run infrastructure and services separately using `infrastructure.yml` or `services.yml` over `system.yml`. All three files are also compatible with `docker-compose` should you wish to run without fuge.

## Contributing
The [NodeZoo][] org encourages __open__ and __safe__ participation. If you feel you can help in any way, be it with documentation, examples, extra testing, or new features please get in touch.
Before contributing please review our __[Code of Conduct]__

## License
Copyright (c) 2016, Dean McDonnell and other contributors.
Licensed under [MIT][].

[Nodezoo]: https://github.com/rjrodger/nodezoo
[Nodezoo web]: https://github.com/rjrodger/nodezoo-web
[Nodezoo info]: https://github.com/rjrodger/nodezoo-info
[Nodezoo search]: https://github.com/rjrodger/nodezoo-search
[Nodezoo github]: https://github.com/rjrodger/nodezoo-github
[Nodezoo npm]: https://github.com/rjrodger/nodezoo-npm
[Concorda]: https://github.com/nearform/concorda
[Lead]: https://github.com/mcdonnelldean
[nearForm]: http://www.nearform.com/
[Vidi]: https://github.com/vidi-insights/vidi-dashboard
[CoC]: https://github.com/nodezoo/nodezoo-org/blob/master/CoC.md

[docker]: ./
