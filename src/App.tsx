import ListGroup from './components/ListGroup';

let items = ['New York', 'San Fransisco', 'Tokyo', 'London', 'Paris'];

const App = () => {
  return (
    <div>
      <ListGroup items={items} heading='Cities' />
    </div>
  );
};

export default App;
