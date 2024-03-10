import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  //get req - string
  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  //post req - string
  const data = "hello";
  const postDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  //post req - form
  const [formData, setformData] = useState("");

  const postFormFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testform", {
      formData,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  return (
    <div>
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>
      <br></br>
      <button onClick={postDataFromFrontend}>Post Data</button>
      <p id="para"></p>

      <form onSubmit={postFormFromFrontend}>
        <input
          type="text"
          name="formData"
          value={formData}
          onChange={(e) => setformData(e.target.value)}
        ></input>
        <input type="submit" value="Test form"></input>
      </form>
    </div>
  );
};
export default App;
