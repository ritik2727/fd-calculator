import React, { useId } from "react";
import { Form } from "react-bootstrap";

export default function SelectForm({ title, options, error, ...props }) {
  const id = useId();
  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{title}</Form.Label>
      <Form.Control as="select" {...props}>
        {options &&
          options.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
      </Form.Control>
      {error && <Form.Text className="text-danger">{error}</Form.Text>}
    </Form.Group>
  );
}
