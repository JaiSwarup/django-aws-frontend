import json
import boto3
import base64

import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    # Retrieve the bucket name and file content from the event
    bucket_name = event['bucket_name']
    file_content = event['file_content']
    file_name = event['file_name']
    
    # Decode the base64-encoded file content
    decoded_file_content = base64.b64decode(file_content)
    
    # Initialize S3 client
    s3_client = boto3.client('s3')
    
    # Upload the file to the specified S3 bucket
    s3_client.put_object(Bucket=bucket_name, Key=file_name, Body=decoded_file_content)
    
    # Return a success message
    return {
        'statusCode': 200,
        'body': json.dumps({'message': 'File uploaded successfully!'})
    }
