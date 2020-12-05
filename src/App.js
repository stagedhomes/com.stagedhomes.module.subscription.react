import SubscriptionsForm from './components/SubscriptionsForm/SubscriptionsForm.js';
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="form-constraint">
              <SubscriptionsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
