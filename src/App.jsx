import './mvp.css';
import Table from './Table';

function App() {
    const modelsHeader = ['id', 'model', 'type', 'PS'];
    const modelsBody = [
        [1, 'Corsa', 'small', '85'],
        [2, 'Astra', 'family', '101'],
        [3, 'Mokka', 'SUV', '75'],
        [4, 'Movano', 'transporter', '65'],
        [5, 'Flashback 300', 'allrounder', '1000'],
        [6, 'X4', 'limousine', '360']
    ];

    return (
        <div className="App">
            <h1>Modelle Tabelle</h1>
            <Table headers={modelsHeader} data={modelsBody} />
        </div>
    );
}

export default App;
