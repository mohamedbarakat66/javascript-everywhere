# Task 15.1: curl.md — The Terminal

## 1. GET All Tasks
```bash
curl -i http://localhost:3000/tasks
curl -i -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d "{\"title\":\"Learn cURL\"}"
curl -i -X PATCH http://localhost:3000/tasks/1 -H "Content-Type: application/json" -d "{\"completed\":true}"
curl -i -X DELETE http://localhost:3000/tasks/1