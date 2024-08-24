import './App.css';
import { useState } from 'react';
import { fetchAPI } from './utils/fetchAPI';
import Alert from './components/Alert';
import Domain from './components/Domain';
import Contact from './components/Contact';

function App() {
  const [ domainSelected, setDomainSelected ] = useState(true);
  const [ domainName, setDomainName ] = useState('');
  const [ data, setData ] = useState({});
  const [ openAlert, setOpenAlert ] = useState(false);
  const [ alertMessage, setAlertMessage] = useState({});

  const domainValue = (e) => {
    const selectedValue = e.target.value;
    selectedValue === 'false' ? setDomainSelected(true) : setDomainSelected(false);
  }

  const getData = async () => {
    let reqData = {
      "domainName": domainName,
    }
    if(domainName) {
      let res = await fetchAPI("/data/getData", "POST", reqData);
      if(res) {
        setData(res.data);
      } else {
        setOpenAlert(true);
        setAlertMessage({txt: "Please Check Connection With Server", type: 4})
      }
    } else {
      setOpenAlert(true);
      setAlertMessage({txt: "Please Enter Domain", type: 3})
    }
  }


  return (
    <div className='relative'>
      { openAlert ? <Alert alertMessage={alertMessage} setOpenAlert={setOpenAlert} /> : "" }
      <div className='flex gap-2 items-center justify-center w-full mt-20'>
        <label className="input input-bordered flex items-center gap-2">
          Domain
          <input type="text" className="grow" placeholder="Please Enter Domain" value={domainName} onChange={(e) => setDomainName(e.target.value)}/>
        </label>

        <select className="select select-bordered w-full max-w-xs" defaultValue={domainSelected} onChange={(e) => domainValue(e)}>
          <option value={true}>Domain</option>
          <option value={false}>Contact</option>
        </select>

        <button className="btn btn-outline btn-accent" onClick={() => getData()}>Submit</button>
      </div>
      <div className='w-4/5 mx-auto'>
        { domainSelected ? <Domain data={ data } /> : <Contact data={ data } /> }
      </div>
      
      
    </div>
  );
}

export default App;
