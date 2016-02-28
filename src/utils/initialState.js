import * as constants from '../constants';

export default {
  auth: {
    currently: constants.ANONYMOUS,
    username: null,
    uid: null
  },
  notification: {
    message: null,
    title: null
  },
  widgetList: {
    0: { id:'6FA63F22-16E8-4E4B-9661-FD54B4ACA471', title: 'People on the Bench', value: 0, limit: 12, avatar: 'http://lorempixel.com/100/100/people/' },
    1: { id:'BC05F556-C2DB-4BD9-A1F2-94E3C2D82494', title: 'Generated Leads', value: 0, limit: 5, avatar: 'http://lorempixel.com/100/100/business/' },
    2: { id:'6C21827B-D26C-4680-B789-9BD770CDB1B3', title: 'Network Meetups', value: 0, limit: 5, avatar: 'http://lorempixel.com/100/100/transport/' },
    3: { id:'57EEE05E-B4F6-44E5-A73B-25C982E7E409', title: 'Lunch / Coffee Meetings', value: 0, limit: 5, avatar: 'http://lorempixel.com/100/100/city/' },
    4: { id:'AE445C26-E53A-423F-8BC0-C70933D0764B', title: 'Companies Uncovered', value: 0, limit: 20, avatar: 'http://lorempixel.com/100/100/nightlife/' },
    5: { id:'6DB573B6-F652-4EF3-BBEC-F096FDE3FC54', title: 'Staff Training', value: 0, limit: 5, avatar: 'http://lorempixel.com/100/100/technics/' }
  }
};
