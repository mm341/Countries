import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


import { APIBase } from '../api';


export const Country1=createAsyncThunk('GetCountry/Country',async(name)=>{



try {
  const response =await  axios
  .get(`${APIBase}/v3.1/lang/${name}`);



   return response.data;
}catch (err){


  return err.message;
}
});


export const CountryDetails=createAsyncThunk('GetCountry/CountryDetails',async(name)=>{



  try {
    const response =await  axios
    .get(`${APIBase}/v3.1/name/${name}?fullText=true`);
  
  
  
     return response.data;
  }catch (err){
  
  
    return err.message;
  }
  });




const initialState = {
  GetCountry : [],
    isLoading: false,
  error: null,
  Countrydetails:{}
  };


  export const CountrySlice = createSlice({
    name: 'GetCountry',
    initialState,
    reducers: {

    },

    extraReducers: {

      [Country1.pending]: (state) => {

        // return{ ...state , userDetails:payload};
        // eslint-disable-next-line no-param-reassign
        state.isLoading = true;
        // eslint-disable-next-line no-param-reassign
        state.error = null;

        // eslint-disable-next-line no-param-reassign
        state.GetCountry =null;

      

      },
      [Country1.fulfilled]: (state,{payload}) => {
        

        // eslint-disable-next-line no-param-reassign
        state.isLoading = false;
          // eslint-disable-next-line no-param-reassign
          state.error = null;
        // eslint-disable-next-line no-param-reassign
        state.GetCountry =payload;
      },


      [Country1.rejected]: (state,{payload}) => {

        

        // eslint-disable-next-line no-param-reassign
        state.isLoading = false;
        // eslint-disable-next-line no-param-reassign
        state.error=payload;
        // eslint-disable-next-line no-param-reassign
        state.GetCountry =null;
      },



      [CountryDetails.pending]: (state) => {

       
console.log("pending")
        // eslint-disable-next-line no-param-reassign
        state.Countrydetails =null;

      

      },
      [CountryDetails.fulfilled]: (state,{payload}) => {
        
        console.log("fulfilled")
        // eslint-disable-next-line no-param-reassign
       
        // eslint-disable-next-line no-param-reassign, prefer-destructuring
        state.Countrydetails =payload[0];
      },


      [CountryDetails.rejected]: (state,{payload}) => {

        console.log("rejected")

   
        // eslint-disable-next-line no-param-reassign
        state.error=payload;
        // eslint-disable-next-line no-param-reassign
      
      },




    },
});

export default CountrySlice.reducer;








