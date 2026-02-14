const express = require('express');
const url = require('url');
const app = express();

const courses = [
    { id: 1, name: "MERN Stack", duration: "6 Months", fees: 25000 },
    { id: 2, name: "Python Full Stack", duration: "5 Months", fees: 20000 },
    { id: 3, name: "Java Development", duration: "4 Months", fees: 18000 }
];

// Home
app.get('/', (req, res) => {
    res.render('home.ejs', { total: courses.length });
});

// About
app.get('/about', (req, res) => {
    res.render('about.ejs');
});

// Courses list
app.get('/courses', (req, res) => {
    res.render('courses.ejs', { courses });
});

// Course details (using url.parse)
app.get('/course-details', (req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const courseId = parseInt(parsedUrl.query.id);

    const course = courses.find(c => c.id === courseId);

    if (!course) {
        return res.send("Course not found");
    }

    res.render('courses-details.ejs', { course });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
