import React, {useState} from 'react';
export default function Booking({onDone}){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [slot, setSlot] = useState('2025-11-15 10:00');

  async function book(){
    if(!name || !email) return alert('Please enter name and email');
    const res = await fetch('http://localhost:5000/api/book', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({name,email,slot})});
    const j = await res.json();
    alert('Booking confirmed: ' + j.bookingId + '\\nScheduled: ' + j.slot);
    onDone();
  }

  return (
    <div className="card">
      <h3>Book Online Counseling</h3>
      <label className="small">Name</label><input style={{width:'100%', padding:8, margin:'6px 0'}} value={name} onChange={e=>setName(e.target.value)} />
      <label className="small">Email</label><input style={{width:'100%', padding:8, margin:'6px 0'}} value={email} onChange={e=>setEmail(e.target.value)} />
      <label className="small">Preferred Slot</label>
      <select value={slot} onChange={e=>setSlot(e.target.value)} style={{width:'100%', padding:8, margin:'6px 0'}}>
        <option>2025-11-15 10:00</option>
        <option>2025-11-15 14:00</option>
        <option>2025-11-16 09:00</option>
      </select>
      <div style={{marginTop:12}}>
        <button className="btn" onClick={book}>Confirm Booking</button>
      </div>
    </div>
  );
}
