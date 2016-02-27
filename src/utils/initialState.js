import * as authConst from '../constants/authConstants';

export default {
  auth: {
    currently: authConst.ANONYMOUS,
    username: null,
    uid: null
  },
  notification: {
    message: null,
    title: null
  },
  dashboard: {
    0: { title: 'People on the Bench', value: 0, limit: 0, avatar: 'http://lorempixel.com/100/100/people/' },
    1: { title: 'Generated Leads', value: 0, limit: 0, avatar: 'http://lorempixel.com/100/100/business/' },
    2: { title: 'Network Meetups', value: 0, limit: 0, avatar: 'http://lorempixel.com/100/100/transport/' },
    3: { title: 'Lunch / Coffee Meetings', value: 0, limit: 0, avatar: 'http://lorempixel.com/100/100/city/' },
    4: { title: 'Companies Uncovered', value: 0, limit: 0, avatar: 'http://lorempixel.com/100/100/nightlife/' },
    5: { title: 'Staff Training', value: 0, limit: 0, avatar: 'http://lorempixel.com/100/100/technics/' }
  }
};
