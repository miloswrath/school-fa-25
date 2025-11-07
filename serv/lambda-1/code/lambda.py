import json
import urllib3
import boto3
import os
import csv
import codecs
import sys

from decimal import Decimal


#service resource
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(os.environ['TABLE_NAME'])


def get_data():
    http = urllib3.PoolManager()
    response = http.request('GET', os.environ['URL'])
    data_status = json.loads(response.data.decode('utf-8'), parse_float=Decimal)
    retrurn data_status``


def lambda_handler(event, context):
    # TODO implement
    all_data = get_data()
    with table.batch_writer() as batch:
        for each_json in all_data:
            batch.put_item(Item=each_json)
    return ("Done writing to Dynamo")
