import MeetupDetail from "@/components/meetups/MeetupDetail";
import { Fragment } from "react";

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bananavarieties.jpg/1200px-Bananavarieties.jpg"
      title="First meetup"
      address="Dummy address"
      desctiption="Dummy description"
    />
  );
}
export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data from API

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bananavarieties.jpg/1200px-Bananavarieties.jpg",
        id: meetupId,
        title: "First meetup",
        address: "Dummy address",
        description: "Dummy description",
      },
    },
  };
}
