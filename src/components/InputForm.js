import React, { useId } from "react";
import { Form } from "react-bootstrap";

export default function InputForm({ type, title, error, ...props }) {
  const id = useId();
  return (
    <>
      <Form.Group className="mb-3" controlId={id}>
        {title && <Form.Label>{title}</Form.Label>}
        <Form.Control type={type} autoFocus {...props}  />
        {error && <Form.Text className="text-danger">{error}</Form.Text>}
      </Form.Group>
    </>
  );
}
