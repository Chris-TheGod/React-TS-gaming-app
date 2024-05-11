import ListGroup from './components/ListGroup';

const App = () => {
  const items = ['New York', 'Los Angeles', 'San Fransisco'];

  return (
    <div>
      <ListGroup
        items={items}
        heading='Miami'
        onSelectItem={() => console.log('hi')}
      />
    </div>
  );
};

export default App;
