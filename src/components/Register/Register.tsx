import { Link } from 'react-router-dom';
import './Register.css';

export function Register() {
  return (
    <>
      <h1>Register new board</h1>
      <form>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label"
          >
            Name of board
          </label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label 
            htmlFor="exampleInputPassword1" 
            className="form-label"
          >
              Password
          </label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
          />
        </div>
        <div className="buttonsWrapper">
          <button type="submit" className="btn btn-primary">Register</button>
          <Link to="/">
            <button className="btn btn-primary">Cancel</button>
          </Link>
        </div>
      </form>
    </>
  )
}