import View from './View';
import Runtime from './Runtime';
import update from './update';
import { execute } from './effects';


let initialState = {
  isLoading: false,
  selectedEmail: null,
  folders: [ {
    name: 'Inbox',
    active: false,
    emails: [ {
      id: 9837,
      from: 'John Doe',
      subject: 'Test message',
      received: 'April 5',
      tag: 'Inbox'
    }, {
      id: 4786,
      from: 'Ivan Drago',
      subject: 'Sparring today?',
      received: 'April 6',
      tag: 'Inbox'
    } ]
  }, {
    name: 'Spam',
    active: false,
    emails: [ {
      id: 2745,
      from: 'Donald Trump',
      subject: 'I need a new advisor',
      received: 'April 6',
      tag: 'Spam'
    } ]
  } ]
};


Runtime({
  state: initialState,
  update: update,
  view: View,
  execute: execute,
  root: document.querySelector('#root')
});