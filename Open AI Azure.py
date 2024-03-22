import os
from openai import AzureOpenAI
import json
import csv 

# Load config values
with open(r'openAI_config.json') as config_file:
    openAI_config = json.load(config_file)

my_config = openAI_config['openAIConfigs'][2]

print(f"use openAI config {my_config['configName']}")

# Setting up the deployment name
chatgpt_model_name = my_config['model']

client = AzureOpenAI(
    api_key=my_config['apiKey'],
    api_version=my_config['apiVersion'],
    azure_endpoint=my_config['urlBase']
)
# Send a completion call to generate an answer
print('Sending a test completion job')
start_phrase = "I have a csv file where there are a few dates missing. Can you please take an educated guess and give me values for the dates missing? Also can you make up two values that lay in the near future? 2019-01-02,7.06;2020-01-02,7.09;2023-01-02,6.12;2024-01-02,6.32"



response = client.chat.completions.create(
    model=chatgpt_model_name,
    messages=[{"role": "assistant", "content": start_phrase}])
print(f"{start_phrase}\n{response.choices[0].message.content}")
