# ZeroK Module Injector - NodeJS
Built on SampleApp service using EchoRelay app images. 

## Scope :
- Creating a duplicate pod of another running service. 
- Injecting a node module into a service running on container. 

## Components:
### Initial setup
Setup cluster with [SetupApp <branch: nightly>](https://github.com/zerok-ai/SampleApp/tree/nightly) using node [EchoRelay <branch: nightly>](https://github.com/zerok-ai/EchoRelayApp/tree/nightly) app. 

### injection-test
docker image of the init-container which will deliver the zerok node module to target container.

<u>Preparing injection serum </u>
```
cd injection-test/opentelemetry
npm install
```

<u>Building image</u>
``` 
cd injection-test
minikube image build -t injection-test:0.0.1 .
```

### kubernetes
Kustomize scripts to spin up replica of a running pod and instrument it with injector. 

<u>Create replica with injection</u>
```
cd kubernetes
./run.sh apply service2 
```

<u>Clean up</u>
```
./run.sh delete
```

### nodejs
sample HTTP server app to dev-test injection. 

<u>Testing injection</u>
```
cd nodejs/src
npm install 
node --require ../../injection-test/opentelemetry/tracing.js index.js
```
