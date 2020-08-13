import Places from "../views/Places";
import EditPlace from "../views/EditPlace";
import EditDish from "../views/EditDish";

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
  },
  {
    path: "/owner/places/:placeId/:id/",
    name: "EditDish",
    component: EditDish,
    props: true
  }
];

export default owner;
