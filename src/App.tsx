import ListGroup from './components/ListGroup';

let items = ['New York', 'San Fransisco', 'Tokyo', 'London', 'Paris'];

const handleSelectItem = (item: string) => {
  console.log(item);
};

const App = () => {
  return (
    <div>
      <ListGroup
        items={items}
        heading='Cities'
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};

export default App;
