import { atom } from "recoil"
import { selector } from "recoil";
export const networkAtom=atom({
    key:"networkAtom",
    default:104
});
export const jobAtom=atom({
    key:"jobAtom",
    default:0
});
export const notificationAtom=atom({
    key:"notificationatom",
    default:12
});
export const messagingAtom=atom({
    key:"messagingatom",
    default:0
})
export const total=selector({
    key:"total",
    get:({get})=>
    {
        const networkAtomCount=get(networkAtom)
        const jobAtomCount=get(jobAtom);
        const notificationAtomCount=get(notificationAtom)
        const messagingAtomCount=get(messagingAtom)
        return networkAtomCount+jobAtomCount+notificationAtomCount+messagingAtomCount
    }
})
