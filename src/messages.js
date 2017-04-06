export const MessageType = {
  SHOW_EMAIL: 1,
  TOGGLE_FOLDER: 2,
  EMAIL_LOADED: 3,
};


export const Messages = {
  ShowEmail(email) {
    return {
      type: MessageType.SHOW_EMAIL,
      email: email
    };
  },

  ToggleFolder(name) {
    return {
      type: MessageType.TOGGLE_FOLDER,
      name: name
    };
  },

  EmailLoaded(response) {
    return {
      type: MessageType.EMAIL_LOADED,
      response: response
    };
  }
};