import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';

const Signup = () => {  

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/register', {
            name,
            email,
            password
        })
        .then((response) => {
            console.log(response.data);
            navigate('/login');
        })
        .catch((error) => {
            console.error(error);
        });
    }

  return (
    <div className='bg-secondary bg-opacity-10'
      style={{
        minHeight: '100vh',
        // subtle darker background tinted by primary color so it's related to the primary button
        background: 'linear-gradient(180deg, rgba(13,110,253,0.06), rgba(13,110,253,0.03))',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container py-5 ">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h3 className="card-title text-center mb-3">Create account</h3>

                <form  onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full name</label>
                    <input
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="John Doe"
                      autoComplete="off"
                      onChange={(e)=> setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="name@example.com"
                        autoComplete="off"
                      onChange={(e)=> setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Enter a password"
                        autoComplete="off"
                      onChange={(e)=> setPassword(e.target.value)}
                    />
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-primary" type="submit" value= 'Register'>
                      Register
                    </button>
                  </div>
                </form>

                <hr />
                <div className="text-center">
                  <p className="mb-2">Already have an account?</p>
                  <Link to="/login" className="btn btn-outline-primary">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup