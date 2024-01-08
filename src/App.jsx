import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [profileData, setProfileData] = useState(null);

  function getData() {
    fetch("/profile")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json(); // Parse the response body as JSON
      })
      .then((data) => {
        setProfileData({
          profile_name: data.name,
          about_me: data.about,
        });
        console.log(data); // Log the parsed JSON data
      })
      .catch((error) => {
        console.error("Error during fetch:", error.message);
        return response.text(); // Log the response text for further analysis
      })
      .then((text) => {
        console.log("Response text:", text);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <h1>HOLA</h1>
      </div>
    </>
  );
}

export default App;