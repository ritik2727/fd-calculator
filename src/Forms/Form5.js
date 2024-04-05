import { useFormik } from "formik";
import React, { useId, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import * as Yup from "yup";

const signupSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name must be at most 25 characters")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter your password"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Form5() {
  const {
    values,
    errors,

    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    touched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [show, setShow] = useState(false);

  const handleClose = () => {
    resetForm();
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };
  return (
    <>
      <Button onClick={handleOpen}>Sign up</Button>
      <Modal show={show} onHide={handleClose} scrollable={true} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name.form5">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={values.name}
                autoFocus={false}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.name && !!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email.form5">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={values.email}
                autoComplete="off"
                autoFocus
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.email && !!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password.form5">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                autoFocus
                autoComplete="off"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.password && !!errors.password}
              />

              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmpassword.form5">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="enter your confirm password"
                name="confirmPassword"
                autoFocus={false}
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.confirmPassword && !!errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Sign up</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
