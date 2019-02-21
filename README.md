# Moments

Moments allow you to show any web application during a chat and let customers perform specific actions.

## How it works?

1. The customer receives a rich message with the webview button
2. The customer clicks button
3. Moments show, web applications loads
4. Customer performs activities in the web application
5. The moment is closed either by:
   - Web application (method call)
   - User (close button)

## Examples

### Date picker

App written in Vue, allows a customer to pick any date from date picker. It sends a chosen option back to a chat. Give the customer an option to choose the available term. Send a message with “choose term” button, open web application with data picker component, then send back chosen term to chat conversation as customer’s message.


Preview is deployed [here](https://cdn.livechat-static.com/widget-webview-extensions/datepicker/).

## Developing

### Install dependencies
```
npm install
```

### Bootstrap project using lerna
```
npm run bootstrap
```

### Build single example
```
cd <example-name>
npm run build
```

### Build all examples in parallel
```
npm run build
```


## Feedback

In case of any issues or feature requests send them on https://www.livechatinc.com/community