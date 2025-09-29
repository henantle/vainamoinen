export type Todo = { id: number; title: string; completed: boolean; createdAt: string }

const BASE = 'http://localhost:8080/api'

export async function listTodos(): Promise<Todo[]> {
  const res = await fetch(`${BASE}/todos`)
  if (!res.ok) throw new Error('Failed to fetch todos')
  return res.json()
}

export async function createTodo(title: string): Promise<Todo> {
  const res = await fetch(`${BASE}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  })
  if (!res.ok) throw new Error('Failed to create todo')
  return res.json()
}

export async function toggleTodo(id: number): Promise<Todo> {
  const res = await fetch(`${BASE}/todos/${id}/toggle`, { method: 'PATCH' })
  if (!res.ok) throw new Error('Failed to toggle todo')
  return res.json()
}
