import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { getStudent, clearStudent } from "../../redux/features/studentSlice";
import Layout from "./layout/Layout";

const Student = () => {
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudent(param.id))
    return () => {
      dispatch(clearStudent())
    }
  }, []);

  const student = useSelector((state) => state.student.student);
  const { firstName, lastName, email, phone, address } = student;

  return (
    <Layout>
      <Paper>
        <Typography variant="h2" gutterBottom>
          {firstName} {lastName}
        </Typography>

        <Typography variant="h5" gutterBottom>
          {phone}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {email}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {address}
        </Typography>
      </Paper>
    </Layout>
  );
};

export default Student;
