import { atom, selector } from 'recoil';
import axios from 'axios';
export const networkAtom = atom({
  key: 'networkAtom',
  default: { network: 0, jobs: 7, messaging: 5, notifications: 4 }, 
});
export const networkDataSelector = selector({
  key: 'networkDataSelector',
  get: async () => {
    const res = await axios.get('https://sum-server.100xdevs.com/notifications');
    return res.data;
  },
});
