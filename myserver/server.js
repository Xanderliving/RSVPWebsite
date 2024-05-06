const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());

const session = require('express-session');

app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.post('/login', (req, res) => {
  // Validate user credentials
  if (validCredentials) {
      req.session.userId = userId; // Set session identifier
      res.redirect('/dashboard');
  } else {
      res.render('login', { error: 'Invalid username or password' });
  }
});

const requireAuth = (req, res, next) => {
  if (req.session.userId) {
      next(); // User is authenticated, continue to next middleware
  } else {
      res.redirect('/'); // User is not authenticated, redirect to login page
  }
}

app.get('/dashboard', requireAuth, (req, res) => {
  // Render the dashboard page
});

// Mongoose connection
mongoose.connect("mongodb+srv://alexw123456w:WeddingRsvp@cluster0.bplwno7.mongodb.net/RSVP?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Models
const Schema = mongoose.Schema;
const userSchema = new Schema({
  Email: String,
  Role: String,
  RSVP: String,
  Name: String,
  Many: Number
});
const User = mongoose.model('User', userSchema);

// Routes
app.get('/items', async (req, res) => {
  try {
    const items = await User.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/items', async (req, res) => {
  const newItem = new User(req.body);
  try {
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/data/count-rsvp', async (req, res) => {
  try {
    const counts = await User.aggregate([
      {
        $group: {
          _id: "$RSVP",
          count: { $sum: 1 }
        }
      }
    ]);
    res.json(counts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
