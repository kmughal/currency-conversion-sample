# Introduction

A sample code for currency conversion using a simple express js server.

## How to use this ?

Please follow the prerequisite mentioned in the main Readme

You can use Postman to send a Post request to the following end point.

- url : `http://localhost:4000/currency-converter`
- method type: `POST`
- request body :

    ```json
    {
      "to": "DOLLAR",
      "from": "EUR",
      "amount": 300
    }
    ```

- expected response :

```json
  {
    "amountInEUR": 300,
    "amountInDOLLAR": 301.44516
  }
```

This will start the express server which will listen to port 4000.
You can use Postman OR a web browser to use this.
You can do a send a simple Get reqest to the following url <http://localhost:4000/currency-converter>.

For the end point to return you the required result you have to send two values in the request url.

- amount: Amount in dollars
- to: Currency Key in which you want to convert the amount.
- from: Currency Key in which you want to convert from the amount.

| Currency Key |
| ------------ |
| GBP          |
| EUR          |
| CAD          |
| INR          |
| MXN          |
| AUD          |
| CNY          |
| MYR          |
| COP          |
