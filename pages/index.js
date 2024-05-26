// our-domain.com/

import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bananavarieties.jpg/1200px-Bananavarieties.jpg",
//     address: "Some address",
//     description: "This is a first meetup",
//   },
//   {
//     id: "m2",
//     title: "A first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bananavarieties.jpg/1200px-Bananavarieties.jpg",
//     address: "Some second address",
//     description: "This is a second meetup",
//   },
// ];

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly acive React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {>
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://madhavrawal29122000:GtVygzGHlcQcRrHy@cluster0.evwindh.mongodb.net/meetupdatabase?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
