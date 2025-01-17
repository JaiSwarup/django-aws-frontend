# AWS Assignment

This repository contains two AWS lambda_handlers that are part of the 90North assignment. Below is a detailed description of each file and its purpose.
## Lambda Functions

### 1. `add_numbers_lambda.py`

This AWS Lambda function takes two numbers as input, adds them, and returns the result. It is designed to be simple and efficient, making it easy to integrate into other AWS services or applications.

#### Key Features:
- Accepts two numerical inputs.
- Returns the sum of the two numbers.
- Can be triggered via API Gateway, AWS SDK, or other AWS services.

#### Usage:
To deploy and invoke the function, follow these steps:
1. Create a Lambda function in the AWS Management Console.
2. Upload the `add_numbers_lambda.py` file.
3. Set up the appropriate IAM role with necessary permissions.
4. Test the function with sample input to ensure it works correctly.

### 2. `store_document_lambda.py`

This AWS Lambda function is designed to store a document or PDF file in an S3 bucket. It handles the upload process and ensures that the file is stored securely with the appropriate permissions.

#### Key Features:
- Accepts a document or PDF file as input.
- Stores the file in a specified S3 bucket.
- Configures the S3 bucket with the necessary permissions.
- Can be triggered via API Gateway, AWS SDK, or other AWS services.

#### Usage:
To deploy and invoke the function, follow these steps:
1. Create a Lambda function in the AWS Management Console.
2. Upload the `store_document_lambda.py` file.
3. Set up the appropriate IAM role with necessary permissions.
4. Specify the target S3 bucket in the function's environment variables.
5. Test the function with a sample document to ensure it works correctly.