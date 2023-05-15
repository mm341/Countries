import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Country1, CountryDetails } from '../features/Country';

function Home() {

  const [open1, setOpen1] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handelclickopen1=()=>{
    setOpen1(true)
    
  }


  const handleClose1=()=>{
    setOpen1(false)
  }


  


  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open1) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open1]);

  const [language, setlanguage] = useState('');

  const handleChange = e => {
    setlanguage(e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (language) {
      dispatch(Country1(language));
    }
  }, [language, dispatch]);

  const { GetCountry, isLoading, error, Countrydetails } = useSelector(
    state => state.country
  );

  
  


  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        my: '100px',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
          alignItems: 'center'
        }}
      >
        <Box sx={{ maxWidth: 550, width: '350px' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Languages</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              label="Languages"
              onChange={handleChange}
            >
              <MenuItem value={'english'}>English</MenuItem>
              <MenuItem value={'spanish'}>Spanish</MenuItem>
              <MenuItem value={'french'}>French</MenuItem>
              <MenuItem value={'Turkmen'}>Turkmen</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {isLoading && !error && !GetCountry && <Box>waiting...</Box>}
      <Box
        sx={{
          width: 'full',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {GetCountry &&
          GetCountry?.length > 0 &&
          GetCountry?.map((e, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                gap: '30px',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography
                onClick={() => {
                handelclickopen1()  
                  dispatch(CountryDetails(e?.name?.official))
                
                }}
                className="w-[200px] min-w-[200px] cursor-pointer text-[25px] font-bold"
              >
                {e?.name?.official}
              </Typography>

              <img
                onClick={() => {
                  handelclickopen1()
                  dispatch(CountryDetails(e?.name?.official))}}
                src={e?.flags?.png}
                className="h-[70px] w-[70px] cursor-pointer"
                alt={e?.name?.official}
              />
            </Box>
          ))}
      </Box>

      <Dialog
        open={open1}
        onClose={handleClose1}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle sx={{fontSize:"30px",fontWeight:"bold"}} id="scroll-dialog-title">Country Details</DialogTitle>
        <DialogContent sx={{width:"500px",minWidth:"300px"}} dividers={scroll === 'paper'}>

<Box sx={{display:"flex",flexDirection:"column",gap:"20px", alignItems:"center"}}>

<Typography sx={{display:"flex", gap:"15px"}}>Name: {Countrydetails?.name?.official}</Typography>

{Countrydetails?.capital?.map((e,i)=>(
  <Typography key={i} sx={{display:"flex", gap:"15px"}}>Capital: {e}</Typography>
))
}

<Box sx={{display:"flex",gap:"20px"}}>

<Typography >Borders: </Typography>

<Box  sx={{display:"flex",gap:"15px",alignItems:"center"}}>

{Countrydetails?.borders?.map((e,i)=>(
 
  <Typography key={i}>{e}</Typography>
  
))
}
</Box>
</Box>

{Countrydetails?.languages &&
<Box sx={{display:"flex", gap:"15px"}}>languages:

<Box   sx={{display:"flex",gap:"15px",alignItems:"center"}}>
 {[Object?.values(Countrydetails?.languages)]?.map((e,i)=>(
  <Typography sx={{marginRight:"15px",display:"flex",gap:"15px"}} key={i}>{e}</Typography>
 ))}
 </Box>
 </Box>

}
</Box>
        </DialogContent>
      </Dialog>



    </Container>
  );
}

export default Home;
