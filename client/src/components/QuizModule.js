import React, {useEffect, useState} from 'react';
export default function QuizModule({onDone}){
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(()=> {
    fetch('http://localhost:5000/api/quiz').then(r=>r.json()).then(j=>setQuiz(j.quiz));
  },[]);

  function pick(id, opt){
    setAnswers({...answers, [id]:opt});
  }

  function submit(){
    // lightweight scoring
    let score = 0;
    quiz.forEach(q => { if(answers[q.id] === 'Yes') score += 1; });
    alert('Quiz complete — your score: ' + score + '. This demo uses results to improve model over time.');
    // optionally call feedback endpoint
    onDone();
  }

  return (
    <div className="card">
      <h3>Health Quiz</h3>
      <p className="small">Short quiz to refine symptom analysis (demo).</p>
      {quiz.map(q => (
        <div key={q.id} style={{marginBottom:8}}>
          <div style={{fontWeight:600}}>{q.q}</div>
          <div style={{display:'flex', gap:8, marginTop:6}}>
            {q.options.map(opt => <button key={opt} onClick={()=>pick(q.id,opt)} className="symptom-chip" style={{border: answers[q.id] === opt ? '2px solid var(--accent)' : undefined}}>{opt}</button>)}
          </div>
        </div>
      ))}
      <div style={{marginTop:12}}>
        <button className="btn" onClick={submit}>Submit Quiz</button>
      </div>
    </div>
  );
}
