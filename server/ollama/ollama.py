import requests
import json

#set up the base URL for the local Ollama API
url = "http://localhost:11434/api/chat"

#define the payload 
payload = {
    "model" : "gemma",
    "message" : [{"role" : "user", "content" : "Hello, Ollama!"}]
}

#send the HTTP POST request with straimg enabled
response = requests.post(url, json=payload, stram=True)