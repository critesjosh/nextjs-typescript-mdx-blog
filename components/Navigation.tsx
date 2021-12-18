import Link from 'next/link';
import React from 'react';
import { useEthers } from '@usedapp/core';

const Navigation = (): JSX.Element => {
  const { activateBrowserWallet, deactivate, account } = useEthers();

  return (
    <nav>
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-6 py-4">Home</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-6 py-4">About</a>
      </Link>
      <div>
        <div>
          <button onClick={() => activateBrowserWallet()}>Connect</button>
        </div>
        <div>
          <button onClick={() => deactivate()}>Disonnect</button>
        </div>
        {account && <p>Account: {account}</p>}
      </div>
    </nav>
  );
};

export default Navigation;
