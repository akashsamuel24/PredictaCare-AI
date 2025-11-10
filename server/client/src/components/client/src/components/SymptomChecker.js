import React, {useState} from 'react';
const sampleChips = ['fever','cough','headache','nausea','dizziness','chest pain','shortness of breath','stomach ache','sore throat'];

export default function SymptomChecker({onBack, onResult}){
  const [chips, setChips] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  function toggleChip(c){
    setChips(prev => prev.includes(c) ? prev.filter(x => x!==c) : [...prev, c]);
  }

  async function submit(){
    const symptoms = [...chips];
    if(text.trim()) symptoms.push(...text.split(',').map(s=>s.trim()).filter(Boolean));
    if(symptoms.length===0){ alert('Add at least one symptom'); return; }
    setLoading(true);
    try{
      const res = await fetch('http://localhost:5000/api/predict', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({symptoms})});
      const data = await res.json();
      onResult(data);
    }catch(e){ alert('Server error (demo)'); console.error(e); }
    setLoading(false);
  }

  return (
    <div className="card">
      <button className="small" onClick={onBack} style={{marginBottom:8}}>← Back</button>
      <h3>Symptom Checker</h3>
      <p className="small">Select common symptoms or type your own (comma-separated).</p>

      <div className="symptom-list" style={{marginBottom:12}}>
        {sampleChips.map(c => <div key={c} className="symptom-chip" onClick={()=>toggleChip(c)} style={{border: chips.includes(c) ? '2px solid var(--accent)' : undefined}}>{c}</div>)}
      </div>

      <textarea placeholder="Type symptoms, e.g. fever, sore throat" value={text} onChange={e=>setText(e.target.value)} rows={3} style={{width:'100%', padding:10, borderRadius:6, border:'1px solid #e6eefc'}} />

      <div style={{marginTop:12, display:'flex', gap:8}}>
        <button className="btn" onClick={submit} disabled={loading}>{loading ? 'Analyzing...' : 'Analyze Symptoms'}</button>
        <button className="btn" style={{background:'#999'}} onClick={()=>{ setText(''); setChips([]); }}>Reset</button>
      </div>
    </div>
  );
}
