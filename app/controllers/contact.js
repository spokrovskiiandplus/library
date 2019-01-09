import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

    emailAddress: '',
    isValid: match('emailAddress', /^.+@.+\..+$/),
    isDisabled: not('isValid'),

  actions: {
    snedMessage() {
      this.set('responseMessage', `Thank you! We got your message and we’ll get in touch with you via your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }
});
