# Introduction

This is a sample code which will enable you to perform various operations on different currencies.

.e.g. It will enable you to add 10 Dollar with 5 Euro and get answer in GBP!

## How to use this ?

Please follow the prerequisite mentioned in the main Readme

You can use Postman to send a Post request to the following end point.

- url : ``` http://localhost:4000/apply-operations-currency ```
- method type: ``` POST ```
- request body :

  ```json
     { "input1": {
        "amount": 10,
        "currency": "DOLLAR"
    },
    "input2": {
        "amount": 10,
        "currency": "EUR"
    },
    "operation": "add",
    "resultCurency": "DOLLAR"
    }
    ```

- expected response :

```json
 { "input1": "10 DOLLAR",
    "input2": "10 EUR",
    "resultCurency": "DOLLAR",
    "outcome": "add 10 DOLLAR to 10 EUR and result is 20.048172 DOLLAR"
}
```
