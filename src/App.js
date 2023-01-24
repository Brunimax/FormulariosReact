
import React from 'react';
import './App.css';
import StandardForms from './componentes/StandardForms';
import FormikForm from './componentes/FormikForm';
import ReactHookForm from './componentes/ReactHookForm';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 border py-3">
            <StandardForms />
          </div>
          <div className="col-md-6 border py-3">
            <FormikForm />
          </div>
        </div>
        {/* <div className="row mt-5">
          <div className="col-md-6 border py-3">
            <FormikForm />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
