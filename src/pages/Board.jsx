import { useState } from "react";
import Card from "../components/Card";
import Dialog from "../components/Dialog";

const Board = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const boardMembers = [
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Alexander Narcia",
      position: "Chairman",
      location: "Colorado, United States",
      description: "John oversees the strategic vision and leads the board.",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Jane Smith",
      position: "Vice Chairman",
      location: "Tbilisi, Georgia",
      description:
        "Jane supports the chairman and assists in strategic planning.",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Michael Johnson",
      position: "Treasurer",
      location: "Colorado, United States",
      description:
        "Michael manages the financial responsibilities of the board.",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Emily Davis",
      position: "Secretary",
      location: "Colorado, United States",
      description:
        "Emily keeps records and manages communication for the board.",
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "John Smith",
      position: "Director of Events",
      location: "Tbilisi, Georgia",
      description: "Davis coordinates and plans events for the organization.",
    },
  ];

  const openDialog = (member) => {
    setSelectedMember(member);
  };

  const closeDialog = () => {
    setSelectedMember(null);
  };

  return (
    <div className="bg-base-light p-8">
      <h1 className="text-4xl font-bold font-florisha text-center py-12">
        Board Members
      </h1>
      {/* grid div that puts board memebers into Card.jsx component and gives them onClick function that opens dialog component */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {boardMembers.map((member, index) => (
          <Card key={index} item={member} onClick={openDialog} />
        ))}
      </div>

      {selectedMember && <Dialog item={selectedMember} onClose={closeDialog} />}
    </div>
  );
};

export default Board;
