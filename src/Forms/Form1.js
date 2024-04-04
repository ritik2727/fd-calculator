import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import InputForm from "../components/InputForm";
import SelectForm from "../components/SelectForm";
import TextForm from "../components/TextForm";

function Form1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [gender, setGender] = useState(false);
  const [formData, setFormData] = useState();
  const [errors, setErrors] = useState({});

  const options = [
    {
      value: "",
      label: "Select a gender",
    },
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
  ];
  const handleClose = () => {
    setShow(false);
    setName("");
    setMessage("");
    setEmail("");
    setGender(false);
    setErrors({});
    setFormData("");
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleSubmit = () => {
    let formIsValid = true;
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
      formIsValid = false;
    }

    if (!email) {
      newErrors.email = "Email is required";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
      formIsValid = false;
    }

    if (!message) {
      newErrors.message = "Message is required";
      formIsValid = false;
    }

    if (!gender) {
      newErrors.gender = "Gender is required";
      formIsValid = false;
    }

    if (formIsValid) {
      setErrors({});
      const formVal = { name, email, message, gender };
      console.log("Form submitted with data:", formVal);
      setFormData(formVal);
      //   handleClose();
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Form1
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        scrollable={true}
        size="lg"
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Form 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputForm
              title="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              error={errors.name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputForm
              title="Email"
              type="email"
              placeholder="name@example.com"
              value={email}
              error={errors.email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextForm
              title="Message"
              error={errors.message}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <SelectForm
              title="Gender"
              value={gender}
              error={errors.gender}
              options={options}
              onChange={(e) => setGender(e.target.value)}
            />
          </Form>
          <div>
            {formData && (
              <div>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Message: {formData.message}</p>
                <p>Gender: {formData.gender}</p>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Form1;
