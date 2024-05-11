import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

const App = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          <span>yo</span>
        </Alert>
      )}
      <Button onClick={() => setAlertVisible(true)} color='primary'>
        Warning
      </Button>
    </div>
  );
};

export default App;
