import axios from 'axios';
import { useForm } from 'react-hook-form';
import { setToken } from '../utils/userSlice';
import { URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {

  const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        // console.log(data);
        onLogin(data);
      };

      const dispatch = useDispatch();

      function onLogin(data) {
        axios.post(`${URL}users/login`, data).then(res => {
            // console.log(res);
            // console.log(res.data);

            localStorage.setItem('access_token', res?.data?.accessToken)
            dispatch(setToken(res?.data?.accessToken));
            navigate('/contacts')

          }).catch(err => console.log(err))
        // setToken
      }

    return(
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>
          <input className='border-b-2' type="text" name="email" {...register("email", {required: 'Email is required', pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Invalid email'
            }})} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input className='border-b-2' type="password" name="password" {...register("password")} />
          {errors.email && <p>Email required</p>}
        </div>
        <div className="form-control">
          <label></label>
          <button className='border-b-2' type="submit">Login</button>
        </div>
      </form>
        </div>
    )
}

export default Login;