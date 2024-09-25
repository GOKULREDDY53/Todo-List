import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import add from "../images/add.png";
import update from "../images/update.png";
import delete1 from "../images/delete.png";

export default function Features() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="features" className="text-center mt-5">
      <h2 className="mb-4">Features of ToDo App</h2>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="w-80 mx-auto"
      >
        <Carousel.Item>
          <img
            className="d-block w-80"
            src={add}
            alt="First slide"
            style={{ width: "800px", height: "400px", marginLeft: "250px" }}
          />
          <div className="caption-wrapper" style={{ marginTop: "150px" }}>
            <Carousel.Caption className="text-dark">
              <h3 className="font-weight-bold">Add New Tasks Easily</h3>
              <p className="font-weight-light">
                Easily add new tasks to your ToDo list and keep track of your
                daily schedule.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src={update}
            alt="Second slide"
            style={{ width: "800px", height: "400px", marginLeft: "250px" }}
          />

          <div className="caption-wrapper" style={{ marginTop: "150px" }}>
            <Carousel.Caption className="text-dark">
              <h3 className="font-weight-bold">Update and Manage Tasks</h3>
              <p className="font-weight-light">
                Update your tasks as they progress and manage them efficiently
                with easy-to-use controls.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src={delete1}
            alt="Third slide"
            style={{ width: "800px", height: "400px", marginLeft: "250px" }}
          />

          <div className="caption-wrapper" style={{ marginTop: "150px" }}>
            <Carousel.Caption className="text-dark">
              <h3 className="font-weight-bold">Delete Completed Tasks</h3>
              <p className="font-weight-light">
                Remove completed tasks from your list to keep it organized and
                clutter-free.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
