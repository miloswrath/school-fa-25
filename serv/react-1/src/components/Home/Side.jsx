import React from "react";
import cat from "../../assets/cat.jpg";
import "./Side.css";

export default function Side() {
  return (
    <aside className="side">
      <h2>About Me</h2>
      <h5>Photo of me:</h5>
      <img
        src={cat}
        alt="A cool cat"
        className="fakeimg imgRounded imgShort"
      />
      <p>I&apos;m a baller cat</p>

      <h3>Message from me</h3>
      <p>Hey everyone! Check out my awesome spiky hairdo—I look super cool</p>

      <div className="fakeimg imgBox">Image</div>
      <div className="fakeimg imgBox">Image</div>
      <div className="fakeimg imgBox">Image</div>
    </aside>
  );
}
