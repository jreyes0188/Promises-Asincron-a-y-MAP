import './App.css';

// Componentes
import Header from './componentes/Header/Header';
import CardList from './componentes/CardList/CardList';

const App = () => {
  return (
    <div>
      <header>
        <h1 className='App'>
          <Header/>
        </h1>
      </header>
      <CardList/>
    </div>
  );
}

export default App;
