import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
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
                      <Form.Label htmlFor="username">Ваш ник</Form.Label>
                      <Form.Control
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        placeholder="Ваш ник"
                        name="username"
                        id="username"
                        autoComplete="username"
                        required=""
                        className="form-control"
                      />
                    </Form.Group>
                  </div>
                  <div className="form-floating mb-4">
                    <Form.Group>
                      <Form.Label className="form-label" htmlFor="password">Password</Form.Label>
                      <Form.Control
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder="Пароль"
                        name="password"
                        id="password"
                        autoComplete="current-password"
                        required=""
                        className="form-control"
                      />
                      <Form.Control.Feedback type="invalid">the username or password is incorrect</Form.Control.Feedback>
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
