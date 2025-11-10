const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 5000;

// fake prediction logic (deterministic for demo)
function predictFromSymptoms(symptoms) {
  const txt = symptoms.join(' ').toLowerCase();
  let results = [
    { condition: 'Common Cold', confidence: 0.12 },
    { condition: 'Allergic Rhinitis', confidence: 0.08 },
    { condition: 'Gastroenteritis', confidence: 0.05 }
  ];

  if (txt.includes('fever') || txt.includes('temperature')) {
    results.unshift({ condition: 'Viral Infection', confidence: 0.62 });
  }
  if (txt.includes('chest pain') || txt.includes('shortness of breath')) {
    results.unshift({ condition: 'Cardiac Evaluation Recommended', confidence: 0.78 });
  }
  if (txt.includes('cough') && txt.includes('fever')) {
    results = [{ condition: 'Flu-like Illness', confidence: 0.71 }, ...results];
  }

  const risk = results[0].confidence > 0.6 ? 'High' : results[0].confidence > 0.3 ? 'Moderate' : 'Low';
  return { primary: results[0], all: results, risk };
}

app.post('/api/predict', (req, res) => {
  const { symptoms } = req.body;
  if (!symptoms || !Array.isArray(symptoms)) return res.status(400).json({ error: 'Invalid input' });
  const prediction = predictFromSymptoms(symptoms);
  // pretend we log and save: return sample history id
  res.json({ id: 'HIST-' + Date.now(), prediction, timestamp: new Date().toISOString() });
});

app.post('/api/book', (req, res) => {
  const { name, email, slot } = req.body;
  if (!name || !email || !slot) return res.status(400).json({ error: 'Missing fields' });
  res.json({ status: 'success', bookingId: 'BK-' + Math.floor(Math.random()*90000+10000), name, slot });
});

app.post('/api/feedback', (req, res) => {
  const { historyId, rating, comments } = req.body;
  res.json({ status: 'received', historyId, rating });
});

app.get('/api/quiz', (req, res) => {
  res.json({
    quiz: [
      { id: 1, q: 'Do you have a fever?', options: ['Yes','No'] },
      { id: 2, q: 'Any difficulty breathing?', options: ['Yes','No'] },
      { id: 3, q: 'Do you have stomach pain?', options: ['Yes','No'] }
    ]
  });
});

app.listen(port, () => console.log(`Mock server running on http://localhost:${port}`));
