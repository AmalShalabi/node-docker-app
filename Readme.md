# Node.js Docker App
This is a simple Node.js application that demonstrates how to connect two Docker containers together using Docker Compose. The application consists of two separate Node.js applications, app1 and app2, which communicate with each other over the network.

## Prerequisites
Before you can run this application, you'll need to have the following tools installed on your machine:

* Docker
* Docker Compose
## Getting Started
To run this application, follow these steps:

1. Clone this repository to your local machine:
```
https://github.com/AmalShalabi/node-docker-app.git
```
2. Change into the root directory of the cloned repository:
```
cd node-docker-app
```

3. Start the Docker containers using Docker Compose:
```
docker-compose up
```
This will start both app1 and app2 in separate containers and connect them together over the network.

Open your web browser and navigate to http://localhost:3000 to see the results.

## Configuration
The following environment variables can be used to configure the application:

`APP1_PORT`: The port on which `app1` will listen. Default is `3000`.
`APP2_PORT`: The port on which `app2` will listen. Default is `3001`.
`APP_URL`: The URL of `app1`. Default is `http://localhost:3000`.
You can set these variables either by editing the `.env` file in the root directory of the application, or by passing them in as environment variables when starting the Docker containers using Docker Compose.

## License
This application is licensed under the MIT license.

## Acknowledgments
This application was inspired by the Docker documentation and the many helpful resources available online about Docker Compose and Node.js.
