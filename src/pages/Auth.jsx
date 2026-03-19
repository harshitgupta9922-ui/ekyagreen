import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.css'

export default function Auth() {
  const [tab, setTab] = useState('signin')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handle(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setError('')
  }

  function handleSignIn(e) {
    e.preventDefault()
    setLoading(true)
    const users = JSON.parse(localStorage.getItem('eg_users') || '[]')
    const user = users.find(u => u.email === form.email && u.password === form.password)
    setTimeout(() => {
      setLoading(false)
      if (!user) { setError('Invalid email or password.'); return }
      localStorage.setItem('eg_user', JSON.stringify(user))
      navigate('/')
    }, 600)
  }

  function handleSignUp(e) {
    e.preventDefault()
    setLoading(true)
    if (form.password.length < 6) { setLoading(false); setError('Password must be at least 6 characters.'); return }
    const users = JSON.parse(localStorage.getItem('eg_users') || '[]')
    if (users.find(u => u.email === form.email)) { setLoading(false); setError('An account with this email already exists.'); return }
    const newUser = { name: form.name, email: form.email, password: form.password }
    users.push(newUser)
    localStorage.setItem('eg_users', JSON.stringify(users))
    localStorage.setItem('eg_user', JSON.stringify(newUser))
    setTimeout(() => { setLoading(false); navigate('/') }, 600)
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Welcome</h1>
        <p className="auth-subtitle">Sign in to your account or create a new one</p>

        <div className="auth-tabs">
          <button className={`auth-tab ${tab === 'signin' ? 'active' : ''}`} onClick={() => { setTab('signin'); setError('') }}>Sign In</button>
          <button className={`auth-tab ${tab === 'signup' ? 'active' : ''}`} onClick={() => { setTab('signup'); setError('') }}>Sign Up</button>
        </div>

        {tab === 'signin' ? (
          <form onSubmit={handleSignIn} className="auth-form">
            <div className="auth-field">
              <label>Email</label>
              <input name="email" type="email" placeholder="Enter your email" value={form.email} onChange={handle} required />
            </div>
            <div className="auth-field">
              <label>Password</label>
              <input name="password" type="password" placeholder="Enter your password" value={form.password} onChange={handle} required />
            </div>
            {error && <p className="auth-error">{error}</p>}
            <button type="submit" className="auth-submit" disabled={loading}>{loading ? 'Signing in…' : 'Sign In'}</button>
          </form>
        ) : (
          <form onSubmit={handleSignUp} className="auth-form">
            <div className="auth-field">
              <label>Full Name</label>
              <input name="name" type="text" placeholder="Enter your full name" value={form.name} onChange={handle} required />
            </div>
            <div className="auth-field">
              <label>Email</label>
              <input name="email" type="email" placeholder="Enter your email" value={form.email} onChange={handle} required />
            </div>
            <div className="auth-field">
              <label>Password</label>
              <input name="password" type="password" placeholder="Create a password (min 6 characters)" value={form.password} onChange={handle} required />
            </div>
            {error && <p className="auth-error">{error}</p>}
            <button type="submit" className="auth-submit" disabled={loading}>{loading ? 'Creating account…' : 'Sign Up'}</button>
          </form>
        )}
      </div>
    </div>
  )
}
