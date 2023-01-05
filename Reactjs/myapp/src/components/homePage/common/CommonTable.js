import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CommonTable(props) {
  console.log("table result is", props);

  return (
    <TableContainer component={Paper}>
      <Table size="small" stickyHeader area-aria-label="stick table">
        <TableHead>
          <TableRow>
          <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              <span className="text-gray-600 font-semibold">Action</span>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              <span className="text-gray-600 font-semibold">First Name</span>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              <span className="text-gray-600 font-semibold">Last Name</span>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              <span className="text-gray-600 font-semibold">Mobile Number</span>
            </TableCell>

            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              <span className="text-gray-600 font-semibold">Password</span>
            </TableCell>

            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              <span className="text-gray-600 font-semibold">Address</span>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              <span className="text-gray-600 font-semibold">PinCode</span>
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ background: "#f1f1f1" }}
            >
              <span className="text-gray-600 font-semibold">Status</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.result &&
            props.data.result.map((row, index) => {
              return (
                <TableRow key={index}>
                  <TableCell></TableCell>

                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.mobileNumber}</TableCell>
                  <TableCell>{row.password}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.pinCode}</TableCell>
                  <TableCell>{row.status}</TableCell>

                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
