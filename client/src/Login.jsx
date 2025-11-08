import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/login', { email, password })
      .then((response) => {
        console.log('Login successful', response.data)
        navigate('/home')
      })
      .catch((error) => {
        console.error('Login failed', error)
      })
  }

  return (
    <div
      className="bg-secondary bg-opacity-10"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h3 className="card-title text-center mb-3">Welcome back</h3>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="name@example.com"
                      autoComplete="email"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      placeholder="Enter your password"
                      autoComplete="current-password"
                    />
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-primary" type="submit" disabled={loading}>
                      {loading ? 'Logging in...' : 'Log in'}
                    </button>
                  </div>
                </form>

                <hr />
                <div className="text-center">
                  <p className="mb-2">Don't have an account?</p>
                  <Link to="/register" className="btn btn-outline-primary">Register</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login