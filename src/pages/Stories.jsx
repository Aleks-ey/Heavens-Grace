import { useState } from "react";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Dialog from "../components/Dialog";

const Stories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    {
      imageUrl: "https://loremflickr.com/1280/720",
      name: "John Doe",
      age: "9",
      location: "Colorado, United States",
      description:
        "John was able to overcome his challenges and now excels in school.",
      date: "2024-10-01",
      carousel: true,
    },
    {
      imageUrl: "https://loremflickr.com/1280/720",
      name: "Jane Smith",
      age: "7",
      location: "Tbilisi, Georgia",
      description: "Jane found her passion in art and is now a budding artist.",
      date: "2024-10-02",
      carousel: true,
    },
  ];

  const carouselStories = stories.filter((story) => story.carousel);

  // Sort the stories array by date from newest to oldest
  const sortedStories = [...stories].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const openDialog = (story) => setSelectedStory(story);
  const closeDialog = () => setSelectedStory(null);

  return (
    <div>
      <Carousel items={carouselStories} fullArt={true} />
      <div className="bg-base-light p-8">
        <h1 className="text-4xl font-bold font-florisha text-center py-12">
          Stories
        </h1>
        {/* grid div that puts stories into Card.jsx component and gives them onClick function that opens dialog component */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedStories.map((story, index) => (
            <Card key={index} item={story} onClick={openDialog} />
          ))}
        </div>
      </div>

      {selectedStory && <Dialog item={selectedStory} onClose={closeDialog} />}
    </div>
  );
};

export default Stories;
