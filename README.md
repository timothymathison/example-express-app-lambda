# Example Express App Using AWS Lambda

This repository contains example code I used to test running an express/node.js app on AWS Lambda.

The orginal example code came from [ClaudiaJS Example Projects](https://github.com/claudiajs/example-projects/tree/master/express-app-lambda)

## Running the Example

Prerequisite: [Set up AWS credentials](https://www.claudiajs.com/tutorials/installing.html)

1. Install dependencies: `npm install`

2. Generate a proxy for the express app: `npm run generate-proxy`

3. Configure AWS Lambda and deploy project: `npm run deploy`

After the last step, the url to invoke the lambda handler will be printed out.

To deploy code changes to lambda run: `npm run update`
