import './App.css';
import { Amplify, API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import Canvas from './Canvas';


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
  let props = {
    h: 1000,
    w: 1000,
    minHeight: 10, 
    minWidth: 10
  }

  return (

    <div className="App">
      <div>
        Test
      </div>
      <Canvas {...props}>
        
      </Canvas>
    </div>
  );
}

export default App;
