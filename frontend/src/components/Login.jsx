import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/index.jsx';
import routes from '../routes.js';

const Login = () => {
  const auth = useAuth();
  const [authFailed, setAuthFailed] = useState(false);
  const inputRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      setAuthFailed(false);

      try {
        const res = await axios.post(routes.loginPath(), values);
        localStorage.setItem('user', JSON.stringify(res.data));
        console.log(localStorage);
        auth.logIn();
        const { from } = location.state;
        navigate(from);
      } catch (err) {
        formik.setSubmitting(false);
        if (err.isAxiosError && err.response.status === 401) {
          setAuthFailed(true);
          inputRef.current.select();
          return;
        }
        throw err;
      }
    },
  });

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body row p-5">
              <Form onSubmit={formik.handleSubmit} className="col-12 col-md-6 mt-3 mt-mb-0">
                <fieldset>
                  <h1 className="text-center mb-4">Войти</h1>
                  <div className="form-floating mb-3">
                    <Form.Group>
                      <Form.Control
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        placeholder="Ваш ник"
                        name="username"
                        id="username"
                        autoComplete="username"
                        isInvalid={authFailed}
                        required
                        ref={inputRef}
                        className="form-control"
                      />
                    </Form.Group>
                  </div>
                  <div className="form-floating mb-4">
                    <Form.Group>
                      <Form.Control
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder="Пароль"
                        name="password"
                        id="password"
                        autoComplete="current-password"
                        required=""
                        isInvalid={authFailed}
                        className="form-control"
                      />
                      <Form.Control.Feedback type="invalid">Неверные имя пользователя или пароль</Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <Button type="submit" variant="w-100 mb-3 btn btn-outline-primary">Войти</Button>
                </fieldset>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
