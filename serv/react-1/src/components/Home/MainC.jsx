import React from "react";
import waffle from "../../assets/waffle_house.jpg";
import nix from "../../assets/nix.png";
import "./MainC.css";

export default function MainC({ humanDate, machineDate }) {
  return (
    <main className="main">
      <h2>My Newest Minecraft Build</h2>
      <div>
        <h5>
          Some awesome waffles{' '}
          <time className="js-today" dateTime={machineDate}>
            {humanDate}
          </time>
        </h5>
      </div>
      <img
        src={waffle}
        alt="Minecraft Waffle House build"
        className="fakeimg imgFull"
      />
      <p>More about it</p>
      <p>That’s my latest Minecraft build—a Waffle House from hell. 😸👍</p>

      <br />

      <h2>My NixOS Configuration</h2>
      <h5>
        Classic - overplayed, even.{' '}
        <time className="js-today" dateTime={machineDate}>
          {humanDate}
        </time>
      </h5>
      <img
        src={nix}
        alt="NixOS configuration desktop"
        className="fakeimg imgFull"
      />
      <p>More about it</p>
      <p>This is my slick NixOS configuration desktop, classic incel stuff</p>
    </main>
  );
}
