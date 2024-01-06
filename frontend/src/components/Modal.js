import React, { Component } from "react";
import { Modal, Button, Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";

class Model extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    const activeItem = { ...this.state.activeItem, [name]: newValue };
    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal show={true} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Task Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup>
              <FormLabel>Title</FormLabel>
              <FormControl
                type="text"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter Task Title"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Description</FormLabel>
              <FormControl
                type="text"
                name="description"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Enter Task Description"
              />
            </FormGroup>

            <FormGroup check>
              <FormControl
                type="checkbox"
                name="completed"
                className="form-check-input"
                checked={this.state.activeItem.completed}
                onChange={this.handleChange}
              />
              <FormLabel>Completed</FormLabel>
            </FormGroup>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={() => onSave(this.state.activeItem)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Model;