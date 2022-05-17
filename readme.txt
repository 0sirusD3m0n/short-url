#URL SHORTENER

This project was based heavily off of Uma Abu's project. In fact, for now, it is basically identical. 
You can find him on youtube at: https://www.youtube.com/c/UmaAbu
You can also visit his github at: https://github.com/ueabu

Please ignore my comments on the commits. I was frustrated and cannot be held accountable for my reactions.

Tech Stack:
This project utlizes React for the web client, and utilizes a Flask Python server on the back end to run the app itself on the server side. It also uses 
gunicorn.

The primary purpose of this app was to give me a brief overview of React/Python as I've never used either. My next goal for this app will be to recreated it 
using ASP.NET on the back end. 


IMPORTANT INFORMATION:

This is missing the ServiceAccountKey.json file, which is very important to the app functioning properly (trust me, I spent an hour wondering why it wasn't
working before realizing I had put the file into my .gitignore file and it wasn't being pushed to the host :/ ). 

You will need to create this file before the app will function.

I have hosted by app at t-url-short.herokuapps.com. I know the name is long and defeats the purpose of a url shortener. It's free, so it'll stay for now.
