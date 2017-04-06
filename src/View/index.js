import React from 'react';
import SideNav from './SideNav';
import MainContent from './MainContent';


export default (state, messages) => {
  return (
    <div className="application-wrapper">
      <h1 className="application-header">{'Super Good E-mail'}</h1>
      {SideNav(state, messages)}
      {MainContent(state.selectedEmail, messages)}
    </div>
  );
};