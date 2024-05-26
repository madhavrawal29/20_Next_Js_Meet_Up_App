import { MongoClient } from "mongodb";

// our-domain/api/new-meetup
//  POST /api/new-meetup

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://madhavrawal29122000:GtVygzGHlcQcRrHy@cluster0.evwindh.mongodb.net/meetupdatabase?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup added successfully" });
  }
}
