// import ListGroup from './components/ListGroup';

import Like from './components/Like';

const App = () => {
  // const items = ['New York', 'Los Angeles', 'San Fransisco'];

  return (
    <div>
      <Like onClick={() => console.log('clicekd')} />
      {/* <ListGroup
        items={items}
        heading='Miami'
        onSelectItem={() => console.log('hi')}
      /> */}
    </div>
  );
};

export default App;
