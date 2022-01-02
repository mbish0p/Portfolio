import React from "react";

import CardItem from "./CardItem";

//images
import avatar1 from "../../images/avatars/avatar1.png";
import avatar2 from "../../images/avatars/avatar2.png";
import avatar3 from "../../images/avatars/avatar3.png";
import avatar4 from "../../images/avatars/avatar4.png";
import avatar5 from "../../images/avatars/avatar5.png";
import avatar6 from "../../images/avatars/avatar6.png";
import avatar7 from "../../images/avatars/avatar7.png";
import avatar8 from "../../images/avatars/avatar8.png";
import avatar9 from "../../images/avatars/avatar9.png";

//types
import { Card } from "../../types/index";

const CardsList = () => {
  const cards: Card[] = [
    {
      id: 1,
      avatar: avatar1,
      name: "Damian Wiśniewski",
      description:
        "Aenean tristique urna et luctus porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur non rutrum augue, laoreet malesuada sapien.",
    },
    {
      id: 2,
      avatar: avatar2,
      name: "Łukasz Gajewski",
      description:
        "Etiam iaculis justo vitae metus faucibus sollicitudin. Donec nec convallis nisi. Proin ligula sem, cursus eu pretium lacinia, aliquet quis lectus",
    },
    {
      id: 3,
      avatar: avatar3,
      name: "Natan Wróblewski",
      description:
        "Praesent a semper est. Cras bibendum neque sapien. Suspendisse vitae libero porttitor elit dignissim consequat vel ac turpis.",
    },
    {
      id: 4,
      avatar: avatar4,
      name: "Konstanty Kaźmierczak",
      description:
        "Nullam rhoncus lorem non commodo aliquam. Proin ut mauris turpis.",
    },
    {
      id: 5,
      avatar: avatar5,
      name: "Józef Jankowski",
      description:
        " Aenean tristique urna et luctus porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur non rutrum augue, laoreet malesuada sapien.",
    },
    {
      id: 6,
      avatar: avatar6,
      name: "Amir Michalak",
      description:
        "Morbi sit amet vehicula lacus. Aliquam ullamcorper fringilla tincidunt.",
    },
    {
      id: 7,
      avatar: avatar7,
      name: "Jacek Michalak",
      description:
        "Morbi quis justo orci. Nunc enim arcu, pellentesque eu consectetur hendrerit, tincidunt id mi.",
    },
    {
      id: 8,
      avatar: avatar8,
      name: "Janusz Kaczmarczyk",
      description:
        "Suspendisse semper, lacus non vulputate tempor, eros dolor posuere purus, vel ullamcorper nisi libero sed elit.",
    },
    {
      id: 9,
      avatar: avatar9,
      name: "Norbert Zieliński",
      description:
        "Etiam tellus purus, interdum ac metus ut, pellentesque volutpat ex. Pellentesque hendrerit, risus ac laoreet consequat, diam orci interdum ante, in commodo odio lacus ac felis.",
    },
  ];

  return (
    <div className="cards--container">
      {cards.map((item) => (
        <CardItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CardsList;
