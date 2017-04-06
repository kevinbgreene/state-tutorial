import React from 'react';
import { Messages } from '../../messages';


export default (email, messages) => {
  const clickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    messages(Messages.ShowEmail(email));
  };

  return (
    <li key={email.id} className="email-item" onClick={clickHandler}>
      <h3 className="email-item-title">{email.subject}</h3>
      <p className="email-item-from">{`From: ${email.from}`}</p>
      <p className="email-item-date">{email.received}</p>
    </li>
  );
};