import {useState} from 'react';
import {Box , Typography, Table, TableCell, TableRow, TableHead, TableBody, } from '@mui/material';
import AddRow from './AddRow';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  tablecell:{
    border:'1px solid rgba(224, 224, 224, 1}',
    borderCollapse:'collapse',
    padding:['7px, 5px', '!important']
  }
})


const CreateTable = ({text, data, setData}) => {
 const classes = useStyles();

const  [rows, addRows] = useState([0]);

  return (
    <Box>
        <Typography mt={2} mb={2}>{text}</Typography>

        <Table sx={{ minWidth: '100%', border:'1px solid rgba(224, 244 , 224, 1)' }} >
        <TableHead>
          <TableRow>
            <TableCell className={classes.tablecell}></TableCell>
            <TableCell className={classes.tablecell}>KEY</TableCell>
            <TableCell className={classes.tablecell}>VALUE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          rows.map((row, index) => (
            <AddRow
            addRows={addRows}
            rowId={index}
            key={index}
            data={data}
            setData={setData}
            />
          ))
        }
        </TableBody>
      </Table>

    </Box>
  )
}

export default CreateTable;