# Arguman + Alexa

This sample Alexa app demonstrates API data fetching interacting with Alexa.

Big thanks to the folks from [arguman.org](https://en.arguman.org/) for letting me use their API.

### Installation
#### Browse to arguman function folder

```sh
$ cd functions/arguman
````

#### Install npm dependencies

```sh
$ npm install
```

#### Generate JSON schema for Skill Builder

```sh
$ npm run model
```

This command will generate your intents schemas and it is compatible with latest beta of Skill Builder.

Remember to rebuild your model everytime you change your intents or utterances, then in your skill schema builder copy/paste `model.json`

### Local development

Install `ngrok` using `npm`

```sh
$ npm install -g ngrok
```

Tunnel `ngrok` to development server port

```sh
$ ngrok http 3000
```
Start the local express server

```sh
$ npm run dev
```


Copy your `ngrok` url, ie: `https://6299b456.ngrok.io`, and paste it in your Alexa Skill Endpoint configuration.

### Deploy to AWS Lambda
#### Setup Apex

Create your `project.json`

```sh
$ apex init
```

And deploy the lambda function

```sh
$ apex deploy arguman
```

Check your AWS Lambda console and copy your function ARN identifier, ie: `arn:aws:lambda:us-east-1:137159733138:function:arguman_arguman`, then paste it in your Alexa Skill Endpoint configuration.

Remember to add the Alexa Skill Kit trigger to your function.

Check the [apex docs](http://apex.run/)

#### Add Alexa trigger for your lambda

Checkout the [docs here](https://developer.amazon.com/docs/custom-skills/host-a-custom-skill-as-an-aws-lambda-function.html)

#### Setup new Alexa Skill

Checkout the [docs here](https://developer.amazon.com/docs/custom-skills/steps-to-build-a-custom-skill.html)
