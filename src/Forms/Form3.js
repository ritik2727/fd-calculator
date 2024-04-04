import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Form3() {
  const [agree, setAgree] = useState(false);
  const [formData, setFormData] = useState();
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setAgree(false);
    setFormData({});
    setErrors({});
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleSubmit = () => {
    setErrors({});
    let newErrors = {};
    let formIsValid = true;

    if (agree === false) {
      newErrors.agree = "You must agree";
      formIsValid = false;
    }

    if (formIsValid) {
      const data = { agree };
      setFormData(data);
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Form3
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        scrollable={true}
        size="lg"
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Form 3</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="radio.form2">
              <Form.Check
                type="checkbox"
                label="Agree to terms and conditions"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
            </Form.Group>
            {errors.agree && (
              <Form.Text className="text-danger">{errors.agree}</Form.Text>
            )}
          </Form>
          <div>
            {formData && formData.agree === true && (
              <>
                <p>agree: user agree on terms and conditions</p>
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

export default Form3;
