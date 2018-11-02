import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["beerProduction"]
mycol = mydb["beerSales"]
data = []
for x in mycol.find():
    data.append(x)
print(data)