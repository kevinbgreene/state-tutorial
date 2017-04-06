import set from './utils/set';
import { MessageType, Messages } from './messages';
import { Effects } from './effects';


export default function(msg, state) {
  switch (msg.type) {
    case MessageType.SHOW_EMAIL: {
      const url = '/app/email/' + msg.email.id;
      const effect = Effects.GetEmail(url);
      const newState = set('isLoading', true, state);

      return [ newState, effect ];
    }

    case MessageType.EMAIL_LOADED: {
      const stateWithEmail = set('selectedEmail', msg.response, state);
      const newState = set('isLoading', false, stateWithEmail);

      return [ newState, Effects.None() ];
    }

    case MessageType.TOGGLE_FOLDER: {
      const updatedFolders = state.folders.map((folder) => {
        if (folder.name === msg.name) {
          return set('active', !folder.active, folder);
        }
        return folder;
      });

      const newState = set('folders', updatedFolders, state);

      return [ newState, Effects.None() ];
    }

    default:
      console.warn(`update called with unrecognized message: ${msg}`);
      return state;
  }
}