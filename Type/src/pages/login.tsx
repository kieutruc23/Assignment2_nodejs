import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formState, setFormState] = useState({ login: '', password: '' });
    const [errors, setErrors] = useState<{ login?: string }>({});
    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const { login, password } = formState;

        if (login === 'admin' && password === '123456') {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/admin/products');
        } else {
            // Hiển thị thông báo lỗi
            setErrors({ login: 'Tên đăng nhập hoặc mật khẩu không đúng' });
        }
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    return (
        <div>
            <div className="wrapper fadeInDown">
                <div id="formContent">

                    {/* Login Form */}
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="login" className="fadeIn second mt-3" name="login" placeholder="admin" value={formState.login} onChange={handleChange} />
                        <input type="text" id="password" className="fadeIn third" name="password" placeholder="password" value={formState.password} onChange={handleChange} />
                        <button type="submit" className="fadeIn fourth" defaultValue="Log In" >Login</button>
                    </form>

                    {/* Hiển thị thông báo lỗi */}
                    {errors.login && <div className="error">{errors.login}</div>}

                    {/* Remind Passowrd */}
                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
