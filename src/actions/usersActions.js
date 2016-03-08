import * as constants from '../constants';
import Firebase from 'firebase';

const usersRef = new Firebase(constants.FIREBASE).child('users');

export const registerUser = (user) => {
  const key = user.email.replace(/[^a-zA-Z0-9]/g,'_');

  usersRef.once('value', function(snapshot) {
    const isUserIn = snapshot.child(key).exists();
    const latestInfo = {
      lastlogguedIn: (new Date()).toISOString(),
      email: user.email,
      displayName: user.displayName,
      imageURL: user.imageURL
    };

    if(!isUserIn) {
      latestInfo.created = latestInfo.lastlogguedIn;
    }

    usersRef.child(key).set(latestInfo);
  });


};
