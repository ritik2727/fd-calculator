import React, { useId } from "react";
import { Form } from "react-bootstrap";

export default function RadioForm({ title, error, value, setValue, options }) {
  const id = useId();
  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{title}</Form.Label>
      {options &&
        options.map((option) => (
          <Form.Check
            type="radio"
            label={option}
            checked={value === option}
            onChange={() => setValue(option)}
          />
        ))}
      {error && <Form.Text className="text-danger">{error}</Form.Text>}
    </Form.Group>
  );
}
