import { Avatar, Button } from "@material-ui/core";
import React,{ useState, useEffect } from 'react'
import "./tweetbox.css";
import {
  ImageOutlined,
  GifBoxOutlined,
  PollOutlined,
  SentimentSatisfiedAltOutlined,
  CalendarTodayOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";

import { db,auth } from "../../../firebase";

//this is logic and style for the tweet box at the top of the feed
//this is where the tweet creation will happen
//clicking on tweet should grab all the info in the text box, the image link, and display it
function Tweetbox() {
  const [currentUser, setCurrentUser] = useState(null);
  const [tweetContent, setTweetContent] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user.uid);
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe(); // Cleanup the listener when the component unmounts
  }, []);
  
  // function handleTweetSubmit(e) {
  //   e.preventDefault();
  //   //send the tweet value to the backend database, we already have a location for posts, just need to add the sent tweet to thier,
  //   //maybe find a way to fetch the user that sent the tweet and than add his info automaticlly

  //   const newTweet = {
  //     displayName: tweetContent, //find a way to grab the usersname off the UID name
  //     //maybe everytime we create a user we add that user to the collection -> email and uid that we can pull from
  // since the uid is the user thats logged in currently we can just pull databse base info about that user,
  // we will need to create a database entry for profilepice, name, email and uid
  //so in register we will need to add a thing for uploading profile pics
  //     userId: currentUser.uid,
  //     timestamp: new Date().toISOString(),

  //   };
  //}

  return (
    <div className="tweetbox">
      <form className="tweetbox__form">
        <Avatar className="tweetbox__avatar"></Avatar>
        <div className="tweetbox_form-field">
          <div className="tweetbox__input">
            <input placeholder="Whats happening?" type="text"></input>
          </div>
          <div className="tweetbox__input">
            <div className="tweetbox__icons">
              <ImageOutlined className="tweetbox__icon"/>
              <GifBoxOutlined className="tweetbox__icon"/>
              <PollOutlined className="tweetbox__icon"/>
              <SentimentSatisfiedAltOutlined className="tweetbox__icon"/>
              <CalendarTodayOutlined className="tweetbox__icon"/>
            </div>
            <Button onClick={() => console.log(currentUser)} className="tweetbox__btn">Tweet</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Tweetbox;
