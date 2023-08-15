import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Container, Form, FormText } from "react-bootstrap";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  return (
    <Container>
      <h4>React Hook From</h4>
      <Form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            {...register("email")}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register("password")}
            type="password"
            placeholder="Enter password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>ประเภทสมาชิก</Form.Label>
          <Form.Select {...register("useType")}>
            <option value="1" selected>
              ทั่วไป
            </option>
            <option value="2">VIP</option>
            <option value="3">ผู้ดูเเลระบบ</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            {...register("remember")}
            type="checkbox"
            label="Remember me"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <FormText>{data}</FormText>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default App;
