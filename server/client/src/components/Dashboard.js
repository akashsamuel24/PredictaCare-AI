import React from 'react';
export default function Dashboard({onStart, lastPrediction}){
  return (
    <div className="card">
      <h2>Welcome to PredictaCare</h2>
      <p className="small">Understand your symptoms early. Get predictions and book online counseling if needed.</p>
      <div style={{marginTop:14}}>
        <button className="btn" onClick={onStart}>Start Symptom Check</button>
      </div>
      <hr style={{margin:'14px 0'}}/>
      <h4>Recent Summary</h4>
      {lastPrediction ? (
        <div>
          <p className="small">Last checked at {new Date(lastPrediction.timestamp).toLocaleString()}</p>
          <div className="result-item">
            <strong>{lastPrediction.prediction.primary.condition}</strong>
            <div className="small">Confidence: {(lastPrediction.prediction.primary.confidence*100).toFixed(0)}%</div>
            <div className={lastPrediction.prediction.risk === 'High' ? 'risk-high' : lastPrediction.prediction.risk === 'Moderate' ? 'risk-med' : 'risk-low'}>
              Risk: {lastPrediction.prediction.risk}
            </div>
          </div>
        </div>
      ) : <p className="small">No checks yet — start one now.</p>}
    </div>
  );
}
