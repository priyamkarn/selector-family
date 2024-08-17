import { RecoilRoot } from 'recoil';
import { useRecoilValue } from 'recoil';
import { networkDataSelector } from './atoms';
function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}
function MainApp() {
  const networkData = useRecoilValue(networkDataSelector);

  return (
    <>
      <div>
        Network: {networkData.network}
      </div>
    </>
  );
}

export default App;
