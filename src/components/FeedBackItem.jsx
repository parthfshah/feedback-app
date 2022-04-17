import React from "react";
import { useState, useContext } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";


function FeedBackItem({ item }) {
  const {editFeedback, deleteFeedback} = useContext(FeedbackContext)
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedBackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedBackItem;
