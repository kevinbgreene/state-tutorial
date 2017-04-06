import { Messages } from './messages';


export const EffectType = {
  NONE: 1,
  GET_EMAIL: 2
};


export const Effects = {
  None() {
    return {
      type: EffectType.NONE
    };
  },

  GetEmail(url) {
    return {
      type: EffectType.GET_EMAIL,
      url: url
    };
  }
};


export function execute(effect, messages) {
  switch (effect.type) {
    case EffectType.GET_EMAIL:
      setTimeout(() => {
        messages(Messages.EmailLoaded({
          id: 4539,
          from: 'John Doe',
          received: 'April 4',
          subject: 'Test subject',
          body: 'Test body',
          replies: []
        }));
      }, 2000);
  }
}