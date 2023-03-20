import logo from './logo.svg';
import './App.css';
import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk';
import { useMemo } from 'react';
import { SafeAppProvider } from '@gnosis.pm/safe-apps-provider';
import Web3 from 'web3';

function App() {
  const { safe, sdk } = useSafeAppsSDK();
  const web3Provider = useMemo(() => new Web3(new SafeAppProvider(safe, sdk)), [sdk, safe]);

  console.debug("safe =", safe);
  console.debug("sdk =", sdk);
  console.debug("web3Provider =", web3Provider);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
