
import './App.css';
import React, {useCallback, useState} from 'react';

async function getUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (response.ok)
  {
    const data = await response.json()

    return data;
  }
  else {
    return null;
  }

}

function formatDate(string){
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(string).toLocaleDateString([],options);
}

function MakeGithubTable(responseData)
{
  const {created_at, updated_at, login, twitter_username, avatar_url, public_repos, html_url, followers} = responseData;

  return (
  <>
  Data for Github bruger "{login}"
  <img src={avatar_url} style={{maxWidth: "100px", maxHeight: "100px"}}></img>
  <table>
    <thead><tr><th>Oprettet</th><th>Sidst opdateret</th><th>Twitter</th><th>Offentlige Repos</th><th>Følgere</th><th>Profilside</th></tr></thead>
    <tbody><tr><td>{formatDate(created_at)}</td><td>{formatDate(updated_at)}</td><td>{twitter_username}</td><td>{public_repos}</td><td>{followers}</td><td><a href={html_url} target="_blank">Klik her</a></td></tr></tbody>
  </table>
  </>)
}

function App() {

  const [text, setText] = useState("");

  const [displayInfo, setDisplayInfo] = useState();

  async function handleButtonClick(e)
  {
    const responseData = await getUser(text)
    if (responseData)
    {
      setDisplayInfo(MakeGithubTable(responseData))
    }
    else {
      setDisplayInfo("Ingen data blev fundet på bruger \"" + text + "\"")
    }
  }

  return (
    <div className="App">

      <header className="App-header">

      <label>
      Github brugernavn:
      <input type="text" name="GithubUsername" onChange={e => setText(e.target.value)}/>
      </label>
      <button onClick={handleButtonClick}>Søg</button>
      {displayInfo ? displayInfo : null}
      </header>
    </div>
  );
}

export default App;
