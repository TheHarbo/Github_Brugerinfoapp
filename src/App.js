import "./App.css";
import React, { useState } from "react";

async function getUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (response.ok) {
    const data = await response.json();

    return data;
  } else {
    if (response.status === 403) {
      return "Too many requests.";
    } else {
      return null;
    }
  }
}

function formatDate(string) {
  var options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(string).toLocaleDateString([], options);
}

function makeGithubTable(responseData) {
  const {
    created_at,
    updated_at,
    login,
    twitter_username,
    avatar_url,
    public_repos,
    html_url,
    followers,
  } = responseData;

  return (
    <>
      Data for Github bruger "{login}"
      <a href={html_url} id="avatar" target="_blank">
        <img
          src={avatar_url}
          style={{ maxWidth: "100px", maxHeight: "100px" }}
          alt="The avatar of the user"
        ></img>
      </a>
      <table>
        <thead>
          <tr>
            <th>Oprettet</th>
            <th>Sidst opdateret</th>
            <th>Twitter</th>
            <th>Offentlige Repos</th>
            <th>Følgere</th>
            <th>Profilside</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formatDate(created_at)}</td>
            <td>{formatDate(updated_at)}</td>
            <td>{twitter_username}</td>
            <td>{public_repos}</td>
            <td>{followers}</td>
            <td>
              <a href={html_url} target="_blank">
                Klik her
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function App() {
  const [text, setText] = useState("");

  const [displayInfo, setDisplayInfo] = useState();

  async function handleButtonClick() {
    const responseData = await getUser(text);
    if (responseData) {
      if (responseData === "Too many requests.") {
        setDisplayInfo(
          "Der er blevet lavet for mange forespørgelser fra denne IP adresse. Vent en time med at bruge denne app igen."
        );
      } else {
        setDisplayInfo(makeGithubTable(responseData));
      }
    } else {
      setDisplayInfo('Ingen data blev fundet på bruger "' + text + '"');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <label>
          Github brugernavn:
          <input
            type="text"
            name="GithubUsername"
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button id="fetchButton" onClick={handleButtonClick}>
          Hent data
        </button>
        {displayInfo ? displayInfo : null}
      </header>
    </div>
  );
}

export default App;
