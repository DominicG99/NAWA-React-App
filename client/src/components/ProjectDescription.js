import React from "react";
import "./ProjectDescription.css";
function ProjectDescription() {
  return (
    <div className="descriptionContainer">
      <h1 classname="descriptionHeading">
        <strong>Project Description</strong>
      </h1>
      <hr className="descriptionLine" />
      <div className="descriptionText">
        <p
          style={{
            maxWidth: "120ch",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          Not a weather app is a leading-edge web based application that has the
          ability to revolutionize a road trip experience. Vacationing is at an
          all time high as road vehicles continually make it more efficient to
          travel. Consumers rely on a map as an essential tool during travel.
          Map platforms have changed significantly over the recent years due to
          the rise of technology. Current applications often simply give the
          customer a point A to point B route without any options to personalize
          or modify their route. Not a weather app aims to transform the road
          travel experience by giving users the ability to personalize their
          trip. The numerous features provided by the application will allow the
          user to configure their route seamlessly without worrying about a
          complicated user interface.
        </p>
        <p
          style={{
            maxWidth: "120ch",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <br />
          Users have the ability to create an account with us for free to gain
          access to immersive features. These features include route
          personalization and route planning. Route personalization allows us to
          give recommendations based on user interests. Just customize a profile
          and we will do the rest for the user. We will provide a list of
          different routes that will be more engaging than the typical fastest
          A-B route. With route planning users can save the route for an
          upcoming date all within the profile.
        </p>
        <p
          style={{
            maxWidth: "120ch",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <br />
          Using REST APIs, HTML, CSS, JavaScript and Nodejs, we’ve begun to
          develop a stable and reliable web application. We have managed to
          develop communication between our website and various weather and map
          API’s. Doing this will allow us to implement these into our website.
          We will be using Mongo/Mongoose for our database to store user login
          and personalization information.
        </p>
      </div>
    </div>
  );
}

export default ProjectDescription;
