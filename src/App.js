import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import Card from "./components/shared/Card";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback}
        ></FeedbackList>
      </div>
    </>
  );
}
export default App;
