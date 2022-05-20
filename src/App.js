import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import PersonnelList from './pages/PersonnelList';
import { fetchData } from './redux/personnellist/personnelaction';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  return (
    <>
      <PersonnelList/>
    </>
  );
}

export default App;
