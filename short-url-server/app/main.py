from calendar import c
from flask import Flask, redirect, render_template, url_for
import firebase_admin
from firebase_admin import db
import os

cred_obj = firebase_admin.credentials.Certificate('./ServiceAccountKey.json')
default_app = firebase_admin.initialize_app(cred_obj, {
    'databaseURL': 'https://url-shortener-demo-335a2-default-rtdb.firebaseio.com/'
})

app = Flask(__name__, static_folder='../build/static', template_folder="../build")


#Serve application
@app.route("/")
def hello_world():
    return redirect("/app")

@app.route("/app")
def homepage():
    return render_template('index.html')


#Redirect to shortened URL
@app.route('/<path:generatedKey>', methods=['GET'])
def fetch_from_database(generatedKey):
    ref = db.reference("/"+ generatedKey)
    data = ref.get()
    if not data:
        return '404 not found'
    else:
        longURL = data['longURL']
        return redirect(longURL)