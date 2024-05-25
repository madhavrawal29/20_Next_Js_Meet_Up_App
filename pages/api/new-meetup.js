import { MongoClient } from "mongodb";

// our-domain/api/new-meetup
//  POST /api/new-meetup

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://madhavrawal29:rawal@1234@cluster0.reumft1.mongodb.net/databasemeetups?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();

    const meetupCollection = db.collection("meetupCollection");

    const result = await meetupCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup added successfully" });
  }
}
