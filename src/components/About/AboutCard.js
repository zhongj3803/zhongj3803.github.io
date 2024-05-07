import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey, I'm Jesse! I'm a rising junior studying computer science at Vanderbilt University. 
            I've taken quite a few CS courses at school, including machine learning, operating systems, 
            cryptography, software engineering, etc. But, I've also done some self-studying and created 
            a few fun projects. To be honest though, I really don't know what I want to 
            do in the future, so I'm still trying to figure things out!
            <br />
            <br />
            Here are some things I like to do outside of coding!
          </p>
          <ul>
            <li className="about-activity">
              🏀 Basketball
            </li>
            <li className="about-activity">
              🎹 Piano
            </li>
            <li className="about-activity">
              👨‍🍳 Cooking
            </li>
            <li className="about-activity">
              🎧 Spotify
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
