import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import { messagingAtom, networkAtom, total } from './atoms'
import { RecoilRoot } from 'recoil'
import { selector } from 'recoil'
//RecoilRoot
//only update and not use value usesetrecoilstate
//selector(derivedstate)

function App() {
  return <RecoilRoot>
    <MainApp></MainApp>
  </RecoilRoot>
}
function MainApp()
{
  const networkNotificationCount=useRecoilValue(networkAtom)
  const [messagingAtomCount,setMessagingAtomCount]=useRecoilState(messagingAtom)
  const totalCount=useRecoilValue(total)
  return (
    <>
    <button>home</button>
    <button>My network ({networkNotificationCount>=101?"100+":networkNotificationCount})</button>
    <button>messages ({messagingAtomCount})</button>
    <button>{totalCount} is total</button>
    <button onClick={()=>
      {
        setMessagingAtomCount(messagingAtomCount+1);
      }
    }>me</button>
    </>
  )
}
export default App
