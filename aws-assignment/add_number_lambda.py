import json
import logger

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    # Retrieve the numbers from the event
    num1 = event['num1']
    num2 = event['num2']
    
    # Calculate the sum
    result = num1 + num2
    
    # Return the result
    return {
        'statusCode': 200,
        'body': json.dumps({'result': result})
    }
