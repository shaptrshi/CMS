import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app  = express();
app.use(express.json());
app.use(cors())

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',   // Enter the password to the database
    database: 'db'  // Add the database name here
} );

app.post('/api/create', (req, res) => {
    const { id, name, email, dob, phone } = req.body;
    pool.query('INSERT into users(id,name,email,dob,phone) values(?,?,?,?,?)',
     [id, name, email, dob, phone], 
     (err,result) => {
        if (err) throw err;
        res.send('Values inserted');
    }
    );
});

app.post('/api/update', (req, res) => {
    const { id, name, email, dob, phone } = req.body;
    pool.query('UPDATE users SET name=?, email=?, dob=?, phone=? WHERE id=?',
     [name, email, dob, phone, id], 
     (err,result) => {
        if (err) throw err;
        res.send('Values inserted');
    }
    );
});

app.get('/api/read', (req, res) => {
    pool.query('SELECT * FROM users', (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

app.get('/api/delete', (req, res) => {
    const { id } = req.query;
    pool.query('DELETE FROM users WHERE id=?', [id], (err, rows) => {
        if (err) throw err;
        res.send('Values deleted');
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Sever at http://localhost:${port}`);
    }
);
