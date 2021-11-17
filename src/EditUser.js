import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationForm = yup.object({
  Name: yup.string().min(4,'Minimum 4 characters required!!').required('required'),
  age: yup.number().min(1).max(100).required('required'),
  city: yup.string().min(4,'Minimum 4 characters required!!').required('required'),
  profilePic: yup.string().min(4,'Minimum 4 characters required 😄').required('required'),

})

 //Component to Edit the user selected
export function EditUser() {        
  
  const { id } = useParams();
  const [editUser,setEditUser] = useState(null);
  useEffect(() => {
    fetch(`https://6166c4e013aa1d00170a670a.mockapi.io/usersInfo/${id}`,{method: 'GET'})   //get particular user data and fill the text fields with the values
    .then((data) => data.json())
    .then((user) => setEditUser(user))
  },[id])

  return editUser ? <UpdateUser editUser={editUser}/> : ''    //if edituser was fetched, rendering update user component

}


function UpdateUser({editUser}){
  const history = useHistory();
  const { id } = useParams();

  const {handleSubmit,handleBlur,handleChange,errors,values,touched} = useFormik({      //using formik to edit users
    initialValues: {
      Name: editUser.Name,age: editUser.age ,city: editUser.city ,profilePic: editUser.profilePic,
    },
    validationSchema: validationForm,
    onSubmit: (values) => {
      
      fetch(`https://6166c4e013aa1d00170a670a.mockapi.io/usersInfo/${id}`, 
      {
        method: 'PUT',body: JSON.stringify(values),                                 //if validation complete, onsubmit put method is called and values object passed
        headers: {
        'Content-Type': 'application/json'
      },})
      .then(() =>   history.push('/users'));                         //once completed put method, return to users list
    }
  })
 //formik object destructured to handle form
  return <form onSubmit={handleSubmit}>                   
        <div className='input-fields'>
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

        <Button type='submit' variant="contained">Save User</Button>
      </div>
      </form>


}