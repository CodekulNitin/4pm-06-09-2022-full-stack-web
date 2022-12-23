import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CommonTable(props) {

  const removeHeders = (headers, fieldToRemove) => {
    return headers.filter((v) => {
      return !fieldToRemove.includes(v);
    });
  };
  // set rows ob to table
  const allHeaders = Object.keys(props.data.result[0]);
  const headers = removeHeders(allHeaders, ["id"]);


  console.log("data is", props.data.result);

  return (
    <TableContainer component={Paper}>
      <Table  size="small" stickyHeader area-aria-label="stick table">
        <TableHead>
          <TableRow >
            {headers.map((header, index) => (
              <TableCell component="th" scope="row" key={index}
              style={{background:"#f1f1f1"}} 
              >
               <span className="text-gray-600 font-semibold"> {header}</span>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.result.map((row, index) => {
            return (
              <TableRow
                key={index}
              
              >
                {headers &&
                  headers.map((header, i) => (
                    <TableCell key={i}>{row[header]}</TableCell>
                  ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
