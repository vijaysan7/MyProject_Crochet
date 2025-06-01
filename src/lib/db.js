import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("MyProject"); // select database

// Get all crochet projects
async function getCrochets() {
  let crochet = [];
  try {
    const collection = db.collection("crochet");

    const query = {};

    // Get all objects that match the query
    crochet = await collection.find(query).toArray();
    crochet.forEach((crochet) => {
      crochet._id = crochet._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  
  return crochet;
}

// Get crochet project by id
async function getCrochet(id) {
  let crochet = null;
  try {
    const collection = db.collection("crochet");
    const query = { _id: new ObjectId(id) }; //id von mongoDB
    crochet = await collection.findOne(query);

    if (!crochet) {
      console.log("No collection with id " + id);
      // TODO: errorhandling
    } else {
      crochet._id = crochet._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return crochet;
}

// create movie
async function createCrochet(crochet) {
  crochet.image = "/images/placeholder.jpg"; // default poster

  try {
    const collection = db.collection("crochet");
    const result = await collection.insertOne(crochet);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// update movie
// returns: id of the updated movie or null, if movie could not be updated
async function updateCrochet(crochet) {
  try {
    let id = crochet._id;
    delete crochet._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("crochet");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: crochet });

    if (result.matchedCount === 0) {
      console.log("No crochet project with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Crochet project with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete movie by id
// returns: id of the deleted movie or null, if movie could not be deleted
async function deleteCrochet(id) {
  try {
    const collection = db.collection("crochet");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No movie with id " + id);
    } else {
      console.log("Movie with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// export all functions so that they can be used in other files
export default {
  getCrochets,
  getCrochet,
  createCrochet,
  updateCrochet,
  deleteCrochet,
};
