// our-domain.com/

import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bananavarieties.jpg/1200px-Bananavarieties.jpg",
    address: "Some address",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bananavarieties.jpg/1200px-Bananavarieties.jpg",
    address: "Some second address",
    description: "This is a second meetup",
  },
];

export default function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
