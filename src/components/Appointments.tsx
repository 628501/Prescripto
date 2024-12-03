import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Appointments() {
  return (
    <>
      <Typography variant="h5">All Appointments</Typography>
      <TableContainer
        component={Paper}
        sx={{ display: { xs: "none", sm: "none", lg: "block", xl: "block" } }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "700" }}>#</TableCell>
              <TableCell sx={{ fontSize: "700" }} align="left">
                Patient
              </TableCell>
              <TableCell sx={{ fontSize: "700" }} align="right">
                Age
              </TableCell>
              <TableCell sx={{ fontSize: "700" }} align="center">
                Date & Time
              </TableCell>
              <TableCell sx={{ fontSize: "700" }} align="center">
                Doctor
              </TableCell>
              <TableCell sx={{ fontSize: "700" }} align="right">
                Fees
              </TableCell>
              <TableCell sx={{ fontSize: "700" }} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
