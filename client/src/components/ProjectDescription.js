import React from "react";
import "./ProjectDescription.css";

function ProjectDescription() {
  return (
    <div className="descriptionContainer">
      <h1 className="descriptionHeading">
        <strong>Our Mission</strong>
      </h1>
     <hr className="descriptionLine" />
      <div className="descriptionText">
        <p
          style={{
            maxWidth: "120ch",
            textAlign: "center",
            margin: "0 auto",
            whiteSpace: "pre-wrap",
            color: "white",
            fontSize: "20px",
          }}
        >
        We have one mission - improve the road trip experience! 
        As a team we wanted to come up with an idea to improve the typical 
        “point A to point B” road trip experience. 
        This experience is boring and doesn’t add any excitement. Not Just a 
        Weather App adds excitement!
        </p>

        <p
          style={{
            maxWidth: "120ch",
            textAlign: "center",
            margin: "0 auto",
            whiteSpace: "pre-wrap",
          }}
        >
          <br />
          Not Just a Weather App is a leading-edge web based application that revolutionizes the traditional road trip experience. 
          Consumers rely on a map as an essential tool while traveling. 
          Current map applications give the user a “point A to point B” 
          road trip experience without any options to personalize their route. 
          That is why we designed our application with personalization in mind, offering multiple features to improve any road trip experience.
        </p>

        <p
          style={{
            maxWidth: "120ch",
            textAlign: "center",
            margin: "0 auto",
            whiteSpace: "pre-wrap",
          }}
        >
          <br />
          All of our features are seamless. With our clean user interface, creating a route is more convenient than ever. Create a personalized route as soon as you visit the website:
          Add your starting point, destination point, and midpoints, 
          and the map does the rest. The map will display the most efficient route 
          between all points entered. Next to the map there are statistics to help you 
          prepare for the road ahead, check them out! To drive the personalization experience 
          we have designed a profile system. This profile system allows you to create 
          and save those routes to plan ahead. The profile also allows you to save pictures 
          and other information from your route, to revisit the fun adventures you had on your trip.
        </p>

        <p
          style={{
            maxWidth: "120ch",
            textAlign: "center",
            margin: "0 auto",
            whiteSpace: "pre-wrap",
          }}
        >
          <br />
          Overall, we know that your road trip experience 
          will be better with Not Just a Weather App. So now, 
          who’s ready to take a road trip with Not Just a Weather App. 
          Your Adventure Starts Now!
        </p>

      </div>
    </div>
  );
}

export default ProjectDescription;
