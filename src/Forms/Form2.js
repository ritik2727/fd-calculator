import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import RadioForm from "../components/RadioForm";

function Form2() {
  const [gender, setGender] = useState();
  const [formData, setFormData] = useState();
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setGender();
    setErrors({});
    setFormData({});
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleSubmit = () => {
    setErrors({});
    let newErrors = {};
    let formIsValid = true;

    if (!gender) {
      newErrors.gender = "Gender is required";
      formIsValid = false;
    }

    if (formIsValid) {
      const data = { gender };
      setFormData(data);
    } else {
      setErrors(newErrors);
    }
  };
  const options = ["male", "female"];
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Form2
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
            <RadioForm
              title="Gender"
              error={errors.gender}
              value={gender}
              setValue={setGender}
              options={options}
            />
          </Form>
          <div>
            {formData && (
              <>
                <p>{formData.gender}</p>
              </>
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

export default Form2;
