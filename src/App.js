import logo from './logo.svg';
import './App.css';
import { Amplify, API } from 'aws-amplify';
import { useEffect, useState } from 'react';



function App() {
  const [response, setResponse] = useState({});

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    Amplify.configure({ 
      API: {
        endpoints: [
          {
              name: "mcwAPIdev", // name of the API in API Gateway console
              endpoint: "https://qqfpbgvu96.execute-api.us-east-1.amazonaws.com/dev/",
              region: "eu-east-1",
              paths: ['/']
          }
      ]
      }
    })
    API.configure()

    const getData = async () => {
      const apiName = 'mcwAPIdev';
      const path = '/mcw';
      const myInit = {
        headers: {} // OPTIONAL
      };
      const resp = await API.get(apiName, path, myInit)
    
      setResponse(resp);
    }
    getData().catch(console.error)
 
  }, [response]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Data">{ JSON.stringify(response, null, 2) } </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
