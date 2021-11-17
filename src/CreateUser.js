import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationForm = yup.object({                                                      //validation object for returning all errors
  Name: yup.string().min(4,'Minimum 4 characters required!!').required('required'),
  age: yup.number().min(1).max(100).required('required'),
  city: yup.string().min(4,'Minimum 4 characters required!!').required('required'),
  profilePic: yup.string().min(4,'Minimum 4 characters required 😄').required('required'),

})

//component for creating user with the details and adding the values to all users list 
export function CreateUser() {
  const history = useHistory();
 

  const {handleSubmit,handleBlur,handleChange,errors,values,touched} = useFormik({     //formik object used to validate form values
    initialValues: {
      Name: '',age: '',city: '',profilePic: '',
    },
    validationSchema: validationForm,
    onSubmit: (values) => {                                                          //once validation complete, POSt request called through onsubmit
    
      fetch('https://6166c4e013aa1d00170a670a.mockapi.io/usersInfo',
      {
        method: 'POST',body: JSON.stringify(values),
        headers: {
        'Content-Type': 'application/json'
      },})
      .then(() =>   history.push('/users'));
    }
  })



  return <form onSubmit={handleSubmit}><div className='input-fields'>

    <TextField name='Name' 
    onChange={handleChange}      
    helperText={errors.Name && touched.Name && errors.Name} 
    value={values.Name} 
    onBlur={handleBlur} 
    error={errors.Name && touched.Name}
    id="standard-basic" label="Name" variant="standard" />

    <TextField name='age' 
    onChange={handleChange}       
    helperText={errors.age && touched.age && errors.age} 
    value={values.age} 
    onBlur={handleBlur} 
    error={errors.age && touched.age}
    id="standard-basic" label="Age" variant="standard" />

    <TextField name='city' 
    onChange={handleChange}      
    helperText={errors.city && touched.city && errors.city} 
    value={values.city} 
    error={errors.city && touched.city}
    onBlur={handleBlur} 
    id="standard-basic" label="City" variant="standard" />

    <TextField name='profilePic' 
    onChange={handleChange} 
    helperText={errors.profilePic && touched.profilePic && errors.profilePic} 
    value={values.profilePic} 
    error={errors.profilePic && touched.profilePic}
    onBlur={handleBlur} 
    id="standard-basic" label="pic url" variant="standard" />

    <Button type='submit' variant="contained">Add user</Button>
  </div>
  </form>


}


