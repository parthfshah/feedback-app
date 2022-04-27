import React from "react";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedBackItem from "./FeedBackItem";
import Spinner from "./shared/Spinner";

import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? (
    <h3><Spinner></Spinner></h3>
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedBackItem key={item.id} item={item} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => {
  //       return <FeedBackItem key={item.id} item={item} handleDelete={handleDelete}/>;
  //     })}

  //   </div>
  // );
}

export default FeedbackList;
