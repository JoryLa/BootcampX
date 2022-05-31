SELECT cohorts.name as cohort_name, count(assignment_submissions.*) as total_submissions
FROM cohorts 
JOIN students ON cohorts.id = cohort_id
JOIN assignment_submissions ON students.id = student_id
GROUP BY cohort_name
ORDER BY total_submissions DESC;