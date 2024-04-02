import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "../../style/main.css"

import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteStudent } from "../../redux/features/studentSlice";
import "../../style/main.css"
import Layout from "./layout/Layout";


const StudentItem = ({ student }) => {
  const dispatch = useDispatch();

  const { id, firstName, lastName, phone, email, address } = student;
  const handleDelete = () => {
    // delete item code
    dispatch(deleteStudent(id))
  };
  return (


    <Grid sm={3} className="cards-Bg">
      <Paper id="cards-Bg1" >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography id="fname" variant="subtitle2" gutterBottom>
            {firstName} {lastName}
          </Typography>
          <IconButton component={Link} to={`/students/${id}`}>
            <VisibilityIcon />
          </IconButton>
        </Box>
        <Typography variant="caption">{phone}</Typography>
        <Typography variant="caption">{email}</Typography>
        <Typography variant="caption">{address}</Typography>
        <Button
          component={Link}
          to={`/students/${id}/edit`}
          variant="outlined"
          startIcon={<EditIcon />}
        >
          edit
        </Button>
        <Button startIcon={<DeleteOutlineIcon />} onClick={handleDelete}>
          delete
        </Button>
      </Paper>
    </Grid>

  );
};

export default StudentItem;
