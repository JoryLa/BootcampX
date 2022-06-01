const { Pool } = require('pg');

const pool = new Pool({
  user: 'bovedaslim',
  password: '1234',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT DISTINCT teachers.name as teacher_name, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
ORDER BY teacher_name;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort} (cohort): ${user.teacher_name} (teacher)`);
  })
}).catch(err => console.error('query error', err.stack))
pool.end();