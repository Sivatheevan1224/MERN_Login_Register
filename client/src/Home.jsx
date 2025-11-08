import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')

  useEffect(() => {
    // try to read a stored name from localStorage; fallback to 'User'
    const storedName = localStorage.getItem('name') || localStorage.getItem('username')
    setName(storedName || 'User')
  }, [])

  const handleLogout = () => {
    // clear auth-related storage and redirect to login/signup
    localStorage.removeItem('name')
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    navigate('/login')
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #eef2ff 0%, #f8fafc 100%)',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="mb-0">Welcome</h2>
            </div>

            <div className="card shadow-sm overflow-hidden" style={{ borderRadius: '12px' }}>
              <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(180deg, #4f46e5, #06b6d4)', color: 'white' }}>
                  <div className="text-center p-4">
                    <div style={{
                      width: 96,
                      height: 96,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 36,
                      fontWeight: 600,
                      margin: '0 auto'
                    }}>
                      {name ? name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <p className="mt-3 mb-0">Good to see you,</p>
                    <h4 className="mt-1">{name}</h4>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h5 className="card-title">Hi {name} 👋</h5>
                        <p className="card-text text-muted">This is your home dashboard. From here you can access your profile, settings, or log out.</p>
                      </div>
                      <div>
                        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                      </div>
                    </div>

                    <hr />
                    <div className="row">
                      <div className="col-sm-6 mb-3">
                        <div className="p-3 border rounded">
                          <h6 className="mb-1">Profile</h6>
                          <p className="small text-muted mb-0">View and edit your profile information.</p>
                        </div>
                      </div>
                      <div className="col-sm-6 mb-3">
                        <div className="p-3 border rounded">
                          <h6 className="mb-1">Settings</h6>
                          <p className="small text-muted mb-0">Change your preferences and account settings.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home