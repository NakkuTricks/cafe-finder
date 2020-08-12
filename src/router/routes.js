import Places from "../views/Places";
import EditPlace from "../views/EditPlace";

const owner = [
  {
    path: "/owner/places",
    name: "Places",
    component: Places
  },
  {
    path: "/owner/places/:id",
    name: "changePlace",
    component: EditPlace,
    props: true
  }
];

export default owner;
