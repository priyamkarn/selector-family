
import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App


/*
  export const fdata = selectorFamily({
    key: 'fdata',
    get: (id) => async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return res.data;
    }
});
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { countnetwork, countnotification, total, fdata } from './recoil/Atom';
import './App.css';

function App() {
    const nvalue = useRecoilValue(countnetwork);
    const jvalue = useRecoilValue(countnotification);
    const tv = useRecoilValue(total);
    const id = 1; // Define the ID you want to fetch data for
    const fdataLoadable = useRecoilValueLoadable(fdata(id));

    return (
        <>
            my network count is {nvalue}<br />
            my notification value is {jvalue}<br />
            my total value is {tv}<br />
            {fdataLoadable.state === 'hasValue' ? (
                <div>
                    <div key={fdataLoadable.contents.id}>
                        {fdataLoadable.contents.id}: {fdataLoadable.contents.title}
                    </div>
                </div>
            ) : fdataLoadable.state === 'loading' ? (
                <div>Loading...</div>
            ) : (
                <div>Error loading data</div>
            )}
        </>
    );
}

export default App;

*/

