import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectDragonError,
  selectDragonValue,
  selectDragons,
} from './store/selectors';
import {
  addDragon,
  deleteDragon,
  setDragonError,
  setDragonValue,
} from './store/actions';

function App() {
  const dispatch = useDispatch();

  const name = useSelector(selectDragonValue);
  const dragons = useSelector(selectDragons);
  const error = useSelector(selectDragonError);

  const handleChange = (e) => {
    dispatch(setDragonValue(e.target.value));
  };

  const handleDragonSubmit = () => {
    if (
      name.trim() === '' ||
      dragons.find(
        (dragon) => dragon.name.toLowerCase() === name.toLowerCase().trim()
      ) !== undefined
    ) {
      dispatch(setDragonError('invalid data'));
      return;
    }
    dispatch(addDragon());
  };

  return (
    <main>
      <header id="dragon-header">
        <h1>Liste de dragons</h1>
        <p>Nombre de dragons dans la liste : {dragons.length}</p>
      </header>
      <section id="dragon-content">
        <div id="inputGroup">
          <input type="text" value={name} onChange={handleChange} />
          <button onClick={handleDragonSubmit}>Ajouter</button>
          {error !== '' && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <div id='list'>
          <h4>List</h4>
          {dragons.length > 0 ? (
            dragons.map((dragon) => (
              <div key={dragon.id}>
                <span>{dragon.name}</span>
                <button onClick={() => dispatch(deleteDragon(dragon.id))}>
                  X
                </button>
              </div>
            ))
          ) : (
            <p>No dragon</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
