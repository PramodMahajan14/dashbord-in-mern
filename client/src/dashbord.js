import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import {  collectdata} from './redux/Action/dataAction';
import Barchart from './visualization/Barchart';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid } from '@mui/x-data-grid';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Dataform from './visualization/dataform';
const columns = [
  { field: "_id", headerName: 'ID', hide: true},
  { field: 'end_year', headerName: 'End Year', width: 90 },
  { field: 'topic', headerName: 'Topic', width: 100 },
  { field: 'region', headerName: 'Region', width: 110 },
  { field: 'pestle', headerName: 'Pestle', width: 120 },
  { field: 'source', headerName: 'Source', width: 90 },
  { field: 'country', headerName: 'Country', width: 200 },
  {
    field: 'sector',
    headerName: 'Sector',
    type: 'number',
    width: 100,
  },
  { field: 'added', headerName: 'Added Date', width: 200 },
  { field: 'published', headerName: 'Published Date', width: 200 },
  
];






const StyledFab = styled(Fab)({
  position: 'fixed',
  zIndex: 1,
  left: 6,
  bottom:9,
  
});

 const Dashbord=()=>{
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

 const [load ,setload]  = useState(true)
 const [rows,setdata] = useState([])
 const new_data = useSelector((state)=> state.alldata.allinfo)

  const dispatch = useDispatch();
  const mydata = async()=>{
    try{
      const res = await axios.get('/api/getalldata');
      setdata(res.data)
       const getdata = await res.data;
     
      dispatch(collectdata(getdata))
    }catch(err){
      if(err){
        // If fails, Do something else
        console.log(err)
        }
    }
   }
  useEffect(()=>{
   if(load === true){
     mydata();
     setload(false)
  
   }
  })

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  return (<>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
           Dashbord
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

    <StyledFab color="secondary" aria-label="add" id="addbtn">
            <AddIcon onClick={handleClickOpen} />
          </StyledFab>

      <Barchart/>
 
 <div style={{ height: 400, width: '100%',margin:'3px'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[3]}
        checkboxSelection
      
      />
  </div>

  <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Add data"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Dataform/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose} autoFocus>
            Cancle
          </Button>
        </DialogActions>
      </Dialog>
  </>);
}

export default Dashbord;