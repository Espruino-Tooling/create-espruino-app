import {DeviceController} from '@espruino-tools/device-controller'
import {useState} from 'react'
function App() {

  const [device] = useState(new DeviceController())

  function connect(){
    device.connect(function(){
      alert('connected');
    })
  }

  return (
    <>
      <button onClick={connect}>Connect</button>
    </>
  );
}

export default App;
