import React from 'react';

export const WelcomePage = () => {
  const welcomeMessage =
    "Welcome to SentimentKintsugi — where emotions meet insight. Inspired by the art of Kintsugi, which embraces the beauty of imperfection by mending broken pottery with gold, our sentiment analysis platform seeks to understand and highlight the emotional patterns often hidden in plain text. Just as cracks in pottery are not flaws but features of its story, we believe every sentiment—positive, negative, or neutral—adds value to the narrative. Explore the emotions behind the words, and discover how even fractured feelings form something beautifully complete.";

  const messageStyle = {
    color: "#fff",
    fontWeight: "bold",
    padding: "10vmin 10vh",
    fontSize: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    marginTop: "20vh",
    marginRight: "10vmin",
    marginLeft: "10vmin",
  };

  return (
    <div >
        <div style={messageStyle}>{welcomeMessage}</div>
    </div>
  )
}
