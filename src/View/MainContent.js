import React from 'react';


export default (email, messages) => {
  if (email === null) {
    return (
      <div className="main-content empty">
        <h2 className="empty-email-message">
          {'Select email to view'}
        </h2>
      </div>
    );
  }

  return (
    <div className="main-content">
      <h2 className="email-title">
        {`Subject: ${email.subject}`}
      </h2>
      <p className="email-date">{`Date: ${email.received}`}</p>
      <p className="email-body">{email.body}</p>
    </div>
  );
};
