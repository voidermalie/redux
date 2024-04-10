import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectDragonError,
  selectDragonValue,
  selectDragons,
  selectKnightError,
  selectKnightValue,
  selectKnights,
} from './store/selectors';
import {
  addDragon,
  deleteDragon,
  setDragonError,
  setDragonValue,
  addKnight,
  deleteKnight,
  setKnightValue,
  setKnightError,
} from './store/actions';

function App() {
  const dispatch = useDispatch();

  const name = useSelector(selectDragonValue);
  const dragons = useSelector(selectDragons);
  const error = useSelector(selectDragonError);

  const knightName = useSelector(selectKnightValue);
  const knights = useSelector(selectKnights);
  const knightError = useSelector(selectKnightError);

  const handleChangeDragon = (e) => {
    dispatch(setDragonValue(e.target.value));
  };

  const handleChangeKnight = (e) => {
    dispatch(setKnightValue(e.target.value));
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

  const handleKnightSubmit = () => {
    if (
      knightName.trim() === '' ||
      knights.find(
        (knight) => knight.knightName.toLowerCase() === knightName.toLowerCase().trim()
      ) !== undefined
    ) {
      dispatch(setKnightError('invalid data'));
      return;
    }
    dispatch(addKnight());
  }

  return (
    <main>
      <section>
        <h1>Fight !</h1>
      </section>
      <section>
        <header id="dragon-header">
          <h2>Liste de dragons</h2>
          <p>Nombre de dragons dans la liste : {dragons.length}</p>
        </header>
        <article id="dragon-content">
          <div className="inputGroup">
            <input type="text" value={name} onChange={handleChangeDragon} />
            <button onClick={handleDragonSubmit}>Ajouter</button>
            {error !== '' && <p style={{ color: 'red' }}>{error}</p>}
          </div>
          <div className="list">
            <h3>List</h3>
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
              <p>Aucun dragon</p>
            )}
          </div>
        </article>
      </section>

      <section>
        <header id="knight-header">
          <h2>Liste de chevaliers</h2>
          <p>Nombre de chevaliers dans la liste : {knights.length}</p>
        </header>
        <article id="knight-content">
          <div className="inputGroup">
            <input type="text" value={knightName} onChange={handleChangeKnight} />
            <button onClick={handleKnightSubmit}>Ajouter</button>
            {knightError !== '' && <p style={{ color: 'red' }}>{knightError}</p>}
          </div>
          <div className="list">
            <h3>List</h3>
            {knights.length > 0 ? (
              knights.map((knight) => (
                <div key={knight.knightId}>
                  <span>{knight.knightName}</span>
                  <button onClick={() => dispatch(deleteKnight(knight.knightId))}>
                    X
                  </button>
                </div>
              ))
            ) : (
              <p>Aucun chevalier</p>
            )}
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
