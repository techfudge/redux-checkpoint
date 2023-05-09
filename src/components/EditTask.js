import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/action/action";

const EditTask = ({ todo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editedTask, setEditedTask] = useState("");

  const dispatch = useDispatch();
  const edit = () => {
    dispatch(editTask(todo.id, editedTask));
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <input
            type="text"
            className="form-control"
            onChange={(e) => setEditedTask(e.target.value)}
            value={editedTask}
          />{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={edit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;
