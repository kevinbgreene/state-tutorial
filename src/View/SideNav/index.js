import React from 'react';
import { Messages } from '../../messages';

// SUB VIEWS
import EmailFolder from './EmailFolder';


export default (state, messages) => {
  return (
    <nav className="side-nav">
      <ul>
        {state.folders.map((folder) => {
          return EmailFolder(folder, messages);
        })}
      </ul>
    </nav>
  );
};