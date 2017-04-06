import React from 'react';
import { Messages } from '../../messages';

// SUB VIEWS
import EmailItem from './EmailItem';


export default (folder, messages) => {
  const folderClass = folder.active ? 'folder-item active' : 'folder-item';
  const clickHandler = (e) => {
    messages(Messages.ToggleFolder(folder.name))
  };

  return (
    <li key={folder.name} className={folderClass} onClick={clickHandler}>
      <h3 className="folder-item-title">{folder.name}</h3>
      <p className="folder-item-desc">{`Count: ${folder.emails.length}`}</p>
      <ul className="folder-email-list">
        {folder.emails.map((email) => {
          return EmailItem(email, messages);
        })}
      </ul>
    </li>
  );
};