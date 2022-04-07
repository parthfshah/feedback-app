import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import {useState} from "react";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value)
  }
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input type="text" placeholder="Please write a review" onChange={handleTextChange} value={text}/>
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
