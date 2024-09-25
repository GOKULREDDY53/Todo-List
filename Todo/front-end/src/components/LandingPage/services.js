import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import options from "../images/1.png";
import bolt from "../images/2.png";
import secure from "../images/3.png";

export default function Services() {
  return (
    <div
      id="services"
      className="text-center mt-5"
      style={{ width: "80%", margin: "0 auto" }}
    >
      <h2 className="mb-4 my-5 py-5">Services what ToDo App offers</h2>
      <CardGroup className="align-items-center border-0 my-5">
        <Card className="border-0">
          <Card.Img
            variant="top"
            src={options}
            style={{ width: "70px", height: "70px", margin: "auto" }}
          />
          <Card.Body>
            <Card.Title>Multiple Options</Card.Title>
            <Card.Text>
              The ToDo App provides you with multiple options to manage your
              tasks and to-do lists. You can create, edit, and delete tasks as
              per your requirement, helping you stay organized and productive.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-0">
          <Card.Img
            variant="top"
            src={bolt}
            style={{ width: "70px", height: "70px", margin: "auto" }}
          />
          <Card.Body>
            <Card.Title>Bolt Performance</Card.Title>
            <Card.Text>
              With our ToDo App's bolt performance, you can experience
              lightning-fast task management. The app is designed to provide
              smooth user interactions and quick response times, ensuring a
              seamless user experience.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-0">
          <Card.Img
            variant="top"
            src={secure}
            style={{ width: "70px", height: "70px", margin: "auto" }}
          />
          <Card.Body>
            <Card.Title>Secure Tasking</Card.Title>
            <Card.Text>
              Your data is securely stored on MongoDB using JWT authentication
              for registered users. We prioritize data security and privacy,
              ensuring that all your sensitive information remains protected and
              accessible only by you.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
