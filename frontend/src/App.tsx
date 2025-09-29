import React, { useEffect, useState } from 'react'
import { listTodos, createTodo, toggleTodo, type Todo } from './api'

export function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function refresh() {
    setLoading(true)
    setError(null)
    try {
      const data = await listTodos()
      setTodos(data)
    } catch (e: any) {
      setError(e.message ?? 'Error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { refresh() }, [])

  async function onAdd(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim()) return
    const optimistic: Todo = { id: Math.random(), title: title.trim(), completed: false, createdAt: new Date().toISOString() }
    setTodos(prev => [optimistic, ...prev])
    setTitle('')
    try {
      const created = await createTodo(optimistic.title)
      setTodos(prev => [created, ...prev.filter(t => t !== optimistic)])
    } catch (e: any) {
      setError(e.message ?? 'Error creating')
      setTodos(prev => prev.filter(t => t !== optimistic))
    }
  }

  async function onToggle(id: number) {
    const prev = [...todos]
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
    try {
      await toggleTodo(id)
      await refresh()
    } catch (e: any) {
      setError(e.message ?? 'Error toggling')
      setTodos(prev)
    }
  }

  return (
    <div style={{ maxWidth: 680, margin: '2rem auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Vaki Todos</h1>
      <form onSubmit={onAdd} style={{ display: 'flex', gap: 8 }}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Add a todo…"
          style={{ flex: 1, padding: 8 }}
        />
        <button type="submit">Add</button>
      </form>
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
      {loading ? <p>Loading…</p> : (
        <ul>
          {todos.map(t => (
            <li key={t.id} style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '8px 0' }}>
              <input type="checkbox" checked={t.completed} onChange={() => onToggle(t.id)} />
              <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>{t.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
