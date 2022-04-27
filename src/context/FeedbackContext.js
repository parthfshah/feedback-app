import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      text: "This is again updated",
      rating: 10,
      id: 1,
    },
    {
      id: 2,
      rating: 8,
      text: "This is feedback item 2 coming from the backend",
    },
    {
      text: "This is feedback item 3 coming from the backend",
      rating: 10,
      id: 3,
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  const updateFeedback =  (id, updItem) => {
  

    setFeedback(feedback.map((item) => (item.id === id ? updItem : item)));
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  const deleteFeedback =  (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
