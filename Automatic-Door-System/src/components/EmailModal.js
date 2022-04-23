import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAlert } from "react-alert";
import axios from "axios";
export default function EmailModal(props) {
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setErrors] = useState({});
  const alert = useAlert();
  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;

    //Subject
    if (!subject) {
      formIsValid = false;
      errors["Subject"] = "Cannot Be Empty!!";
    }

    //Message
    if (!text) {
      formIsValid = false;
      errors["Message"] = "Cannot Be Empty!!";
    }
    setErrors(errors);
    return formIsValid;
  };
  const handleClose = () => {
    setText("");
    setSubject("");
    props.onHide();
  };
  const handleSend = async (e) => {
    e.preventDefault();

    if (handleValidation()) {
      try {
        await axios
          .post("http://localhost:4000/send_mail", {
            text,
            subject,
          })
          .then(() => {
            props.onHide();
            setText("");
            setSubject("");
            alert.success("Email Sent");
          })
          .catch((error) => {
            setText("");
            setSubject("");
            alert.error(
              <div style={{ textTransform: "initial" }}>
                Something Went Wrong
              </div>
            );
          });
      } catch (error) {
        setText("");
        setSubject("");
        alert.error(
          <div style={{ textTransform: "initial" }}>Something Went Wrong</div>
        );
      }
    } else {
      for (const property in error) {
        alert.error(
          <div
            style={{ textTransform: "initial" }}
          >{`${property}:${error[property]}`}</div>
        );
      }
    }
  };
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Message Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSend}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              value={subject}
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              value={text}
              placeholder="Message"
              onChange={(e) => setText(e.target.value)}
              rows={3}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Send Mail
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
