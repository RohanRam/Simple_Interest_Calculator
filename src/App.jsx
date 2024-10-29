import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'



function App() {

const[amnt,setAmnt] =  useState(0)
const[rate,setRate] =  useState(0)
const[year,setYear] =  useState(0)

const[isInvAmnt,setisInvAmnt]=useState(false)
const[isInvRate,setisInvRate]=useState(false)
const[isInvYear,setisInvYear]=useState(false)

const[simpInt,setsimpInt]=useState(0)


const validateInput=(tag)=>
{
  const {name,value}= tag
  console.log(name,value);

  console.log(!!value.match(/^[0-9]*.?[0-9]+$/));

  if(!!value.match(/^\d*.?[0-9]+$/))
  {
    if(name == 'amnt')
    {
      setAmnt(value)
      setisInvAmnt(false)
    }
    else if(name ==  'rate')
    {
      setRate(value)
      setisInvRate(false)
    }
    else if(name ==  'year')
    {
      setYear(value)
      setisInvYear(false)
    }
  }
  else
  {
    if(name =='amnt')
      {
        setisInvAmnt(true)
      }
      else if(name ==  'rate')
      {      
        setisInvRate(true)
      }
      else if(name ==  'year')
      {
        setisInvYear(true)
      }
  }

  
}

  const handleCalc=(e)=>
  {
    e.preventDefault()
    console.log('Button Clicked');

    if (amnt &&  rate && year)
    {
      setsimpInt(amnt*rate*year/100)

    }
    else
    {
      alert('Please fill all the fields')
    }
    
  }

  const handleReset=()=>
  {
    setAmnt(0)
    setRate(0)
    setYear(0)
    setsimpInt(0)

    setisInvAmnt(false)
    setisInvRate(false)
    setisInvYear(false)


  }
  return (
    <>
      <div style={{minHeight:"100vh",width:'100%'}} className='d-flex align-item-center justify-content-center bg-dark p-5'>
        <div style={{width:'600px'}} className='bg-light p-5 rounded'> 
            <h2>Simple Interest Calculator</h2>
            <p>Calculate Your Simple Interest Easily</p>
            <div className='bg-warning rounded d-flex align-items-center  justify-content-center text-light flex-column p-4 '>
                <h1>₹&nbsp;{simpInt} </h1>
                <h2>Total Simple Interest</h2>
            </div>

            <form action="">

                <TextField name='amnt' value={amnt || ""} onChange={e=>validateInput(e.target)} className='mt-3 w-100' id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
                {
                  isInvAmnt &&
                  <p className='text-danger '>Invalid Amount</p>
                }
                <TextField name='rate' value={rate || ""} onChange={e=>validateInput(e.target)} className='mt-3 w-100' id="outlined-basic" label="Rate" variant="outlined" />
                {
                  isInvRate &&
                  <p className='text-danger '>Invalid Rate</p>
                }
                <TextField name='year' value={year || ""} onChange={e=>validateInput(e.target)} className='mt-3 w-100 mb-3' id="outlined-basic" label="Time Period" variant="outlined" />
                {
                  isInvYear &&
                  <p className='text-danger '>Invalid Year</p>
                }

                <Stack direction="row" spacing={2}>
                  <Button disabled={isInvAmnt || isInvRate || isInvYear} type='submit' onClick={handleCalc} className='w-100 bg-dark' style={{height:'50px'}} variant="contained">Calculate</Button>
                  <Button onClick={handleReset} className='w-100' variant="outlined">Reset</Button>
                </Stack>

            </form>
           
        </div>

      </div>
    </>
  )
}

export default App
