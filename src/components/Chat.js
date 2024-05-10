import React, { useState } from "react";
import './Chat.css';

function Chat({ setTrigger, trigger, onAddComment, comments }) {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [comment, setComment] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "icon":
        setIcon(value);
        break;
      case "comment":
        setComment(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddComment({ name, icon, comment });
    setName("");
    setIcon("");
    setComment("");
  }

  return (trigger) ? (
    <div className="chat-popup">
      <div className='chat-inner-popup'></div>
      <button className='close-btn' onClick={() => setTrigger(false)}>close</button>
      <h2>Chat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
       
        <select
          name="icon"
          value={icon}
          onChange={handleChange}
      
        >
          <option value="">Select an icon</option>
          <option value="https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_user_people_person_avatar_black_tone_icon_159361.png">Icon 1</option>
          <option value="https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg">Icon 2</option>
          <option value="https://cdn.vectorstock.com/i/1000x1000/89/54/man-male-avatar-suit-person-icon-graphic-vector-10248954.webp">Icon 3</option>
          <option value="https://cdn.vectorstock.com/i/750p/61/54/bearded-man-avatar-generic-male-profile-picture-vector-50736154.avif">Icon 4</option>
          <option value="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png">Icon 5</option>
          <option value="https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png">Icon 6</option>
          <option value="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_boy_person_avatar_people_white_tone_icon_159357.png">Icon 7</option>
          <option value="https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_person_people_avatar_user_white_tone_icon_159359.png">Icon 8</option>
        </select>
      
        <input
          type="text"
          name="comment"
          placeholder="Comment"
          value={comment}
          onChange={handleChange}
        />
        <button type="submit">Add Comment</button>
      </form>
      <div className="display">
        {comments.map((comment, index) => (
          <div key={index}>
           <img className="img" src={comment.icon} alt="Icon" />
            <div>Name: {comment.name}</div>
            <brk></brk>
            <div>Comment: {comment.comment}</div>
          </div>
        ))}
      </div>
    </div>
  ) : null;
}

export default Chat;



