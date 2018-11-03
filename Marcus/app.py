import os
from flask import Flask, render_template, url_for, json



from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
from pymongo import MongoClient
import pandas as pd             
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
from bson.son import SON
import json

# //inserted
from pymongo import MongoClient
db = MongoClient().aggregation_example
result = db.things.insert_many([{"x": 1, "tags": ["dog", "cat"]},
                                {"x": 2, "tags": ["cat"]},
                                {"x": 2, "tags": ["mouse", "cat", "dog"]},
                                {"x": 3, "tags": []}])
# //code

import pprint
pp = pprint.PrettyPrinter(indent=4)
#Create an instance of flask
app = Flask(__name__)

# Create connection variable
conn = 'mongodb://localhost:27017'
app.config["MONGO_URI"] = "mongodb://localhost:27017/beerProduction"
mongo = PyMongo(app)

# #try using the SQL Lite
# import blaze as bz
# csv_path = 'beer_data_production.csv'
# bz.odo(csv_path, 'sqlite:///data.db::data')

# Create connection variable
conn = 'mongodb://localhost:27017'
app.config["MONGO_URI"] = "mongodb://localhost:27017/beerProduction"
mongo = PyMongo(app)

# class Beer(db.Model):
#     __tablename__ = 'beerSales'

#     id = mongo.Column(db.Integer, primary_key=True)
#     Barrels = mongo.Column(db.Integer)
#     Number_of_Breweries = mongo.Column(db.Integer)
#     Total_Barrels = mongo.Column(db.Integer)
#     Taxable_Removals = mongo.Column(db.Integer)
#     Total_Shipped_Exported = mongo.Column(db.Integer)
#     Date = mongo.Column(db.Integer)

#     def __repr__(self):
#         return '<Beer %r>' % (self.name)

@app.before_first_request
def setup():
    # Recreate database each time for demo
    
    client = MongoClient('mongodb://localhost:27017/')
    client.drop_database('beerProduction')

# Set route
@app.route("/")
def index():
    return render_template("landing_page.html")


@app.route("/beerData")
def beerData():
    return render_template("convertcsv.htm")

@app.route("/viz1") #patricia's landing page
def viz1():
    
    return render_template("landing_page.html")

from flask import Flask, render_template, url_for, json

@app.route("/viz2")
def viz2():
    
    return render_template('index_leilei.html')




@app.route("/viz2_beerBar")
def viz2_beerBar():
    return render_template('index_beerBar.html')


@app.route("/viz2_beerMap")
def viz2_beerMap():
    
    return render_template('index_beerMap.html')

@app.route("/viz2_craftBeerHeat")
def viz2_craftBeerHeat():
    
    return render_template('index_craftBeerHeat.html')

#/static/name of json file








@app.route("/viz3") #muriel's beer analysis
def viz3():
    
    return render_template("index_muriel.html")


@app.route("/viz4") #jasmine circle graph
def viz4():
    
    return render_template("index_jk.html")


@app.route("/compare") #compare
def compare():
    
    return render_template("index_compare.html")















@app.route("/viz5") #patricia's visualization
def viz5():
    
    return render_template("patricia_index.html")

@app.route("/beerProduction_viz") #marcus visualization
def beerProduction_viz():
    #Create connection variable
    client = MongoClient('mongodb://localhost:27017/')
    db=client.beerProduction
    beerSales = db.beerSales
    df = pd.read_csv("beer_data_production.csv") #csv file which you want to import
    records_ = df.to_dict(orient = 'record')
    result = db.beerSales.insert_many(records_ )


    beerSales = mongo.db.beerSales.find_one()
    # data = []
    # for x in beerSales:
    #     data.append(x)
    # print(data)
    return render_template("index.html", beerSales=beerSales)



@app.route("/beerGraph")
def beerGraph():
    beerSales = mongo.db.beerSales.find()
    data = []

    for x in beerSales:
        data.append(x)
    #print(data)
    goodData = pp.pprint(data)
    #pp.pprint(data) 

    # yup = "alrightThen"

    #pprint.pprint(list(db.things.aggregate(pipeline)))
    #results = db.session.query(Pet.type, func.count(Pet.type)).group_by(Pet.type).all()

    trace = {
        "x": [1,0,6],
        "y": [1,2,3] #
    }
    return jsonify(goodData)
    #return render_template("index1.html", beerSales=goodData)

# @app.route("/line")
# def test():
#     data = [{
#         "x": [1, 2, 3, 4, 5],
#         "y": [1, 2, 4, 8, 16]}]

#     return jsonify(data)

if __name__ == "__main__":
    app.run()
