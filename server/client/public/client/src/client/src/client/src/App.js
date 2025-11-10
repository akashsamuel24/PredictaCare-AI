import React, {useState} from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SymptomChecker from './components/SymptomChecker';
import QuizModule from './components/QuizModule';
import Booking from './components/Booking';

export default function App(){
  const [view, setView] = useState('home');
  const [lastPrediction, setLastPrediction] = useState(null);

  return (
    <div className="container">
      <Header onNavigate={setView} />
      <div className="grid">
        <div>
          {view === 'home' && <Dashboard onStart={() => setView('check')} lastPrediction={lastPrediction} />}
          {view === 'check' && <SymptomChecker onBack={() => setView('home')} onResult={(p)=>{setLastPrediction(p); setView('results');}} />}
          {view === 'results' && <div className="card"><h3>Prediction Result</h3><pre>{JSON.stringify(lastPrediction, null, 2)}</pre><button className="btn" onClick={()=>setView('book')}>Book Counseling</button></div>}
          {view === 'quiz' && <QuizModule onDone={()=>setView('home')} />}
          {view === 'book' && <Booking onDone={()=>setView('home')} />}
        </div>
        <div className="card">
          <h4>Quick Actions</h4>
          <p className="small">Use these to access the main flows quickly.</p>
          <div style={{marginTop:12}}>
            <button className="btn" style={{width:'100%', marginBottom:8}} onClick={()=>setView('check')}>Check Symptoms</button>
            <button className="btn" style={{width:'100%', background:'#06c'}} onClick={()=>setView('quiz')}>Take Health Quiz</button>
            <button className="btn" style={{width:'100%', background:'#06a'}} onClick={()=>setView('book')}>Book Counseling</button>
          </div>
          <hr style={{margin:'12px 0'}}/>
          <h5>Last Prediction</h5>
          {lastPrediction ? <pre style={{fontSize:12}}>{JSON.stringify(lastPrediction.prediction, null, 2)}</pre> : <p className="small">No recent checks</p>}
        </div>
      </div>
      <div className="footer">PredictaCare AI — Demo UI for presentation</div>
    </div>
  );
}
