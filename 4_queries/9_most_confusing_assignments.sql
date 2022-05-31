SELECT assignments.id, day, chapter, name, count(assistance_requests) as total_requests
FROM assignments
JOIN assistance_requests ON assignment_id = assignments.id
WHERE assignment_id IS NOT NULL
GROUP BY assignments.id
ORDER BY total_requests DESC;

