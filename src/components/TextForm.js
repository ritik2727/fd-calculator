import React, { useId } from "react";
import { Form } from "react-bootstrap";

export default function TextForm({ title, error, ...props }) {
  const id = useId();
  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{title}</Form.Label>
      <Form.Control as="textarea" rows={3} {...props} />
      {error && (
        <Form.Text className="text-danger">{error}</Form.Text>
      )}
    </Form.Group>
  );
}
