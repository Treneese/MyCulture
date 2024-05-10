import React, {useState} from "react";
import Chat from "./Chat";
import Description from "./Description"
import './Card.css'


function EventCard({ event }) {
  const { name, image, category, subcategory, date, description, location } = event;
  const [buttonChat, setButtonChat] = useState(false);
  const [buttonDescription, setButtonDescription] = useState(false);
  // const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleAddComment = (commentData) => {
    // Logic to handle adding comment
    setComments([...comments, commentData]);
  };


 
//   function handleChatClick() {
//     // Implement chat functionality here
//     // For example, you can open a chat window or navigate to a chat page
//     // Here's a simple example of opening a chat window using an alert
//    // alert("Opening chat for event: " + name);
//     setShowChat(true);
//   }

//   function handleCloseChat() {
//     setShowChat(false);
//   }

  return (
    <li  data-testid="event-item">
        <div className="card-container">
      <img className="card-img" src={image} alt={name} />
      <div className="card-text">
      <h3 className="card-title" >{name}</h3>
      <p className="card-category">{category}</p>
      <p className="card-subcategory">{subcategory}</p>
      <p className="card-date">{date}</p>
      <p className="card-location">{location}</p>
      <button className="card-btn-description" onClick={() => setButtonDescription(true)}>Description</button>
      <Description trigger={buttonDescription} setTrigger={setButtonDescription}>
      <h3>Description</h3>
      <p>{description}</p>
      </Description>
      </div>
         <button className="card-btn-chat" onClick={() => setButtonChat(true)}>Chat</button>
         <Chat trigger={buttonChat} setTrigger={setButtonChat} onAddComment={handleAddComment} comments={comments}>
         <h3>Chat</h3>
         {/* {showChat && ( */}
        <div className="chat-wrapper">
          {/* <Chat event={event} onClose={handleCloseChat} /> */}
          </div> 
        </Chat>
       </div>
      {/* )} */}
    </li>
  );
}

export default EventCard;
