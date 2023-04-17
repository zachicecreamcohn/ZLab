import React from 'react';

import "./Welcome.css"

function Welcome() {
  return (
    <div className="Welcome">
        <div class="left">
            <div className='top'>
                <h1>Header</h1>
            </div>
            <div className='bottom'>
                <div className='option'>
                    <h1>Open Workspace</h1>
                    <p>from file.</p>
                </div>
                <div className='option'>
                    <h1>New Workspace</h1>
                    <p>from the built-in blank workspace</p>
                </div>
                <div className='option'>
                    <h1>Connect to Workspace</h1>
                    <p>on local network.</p>
                </div>
                <div className='option'>
                    <h1>Support ZLab</h1>
                    <p>help maintain this free software</p>
                </div>
            </div>
        </div>
        <div class="right">
        </div>
    </div>
  );
}

export default Welcome;