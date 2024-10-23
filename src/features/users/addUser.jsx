
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addUser } from './users.api';
import { useNavigate } from 'react-router-dom';

export const AddUser = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (user) => {
    dispatch(addUser(user))
      .unwrap()
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.error('Failed to add user:', error)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input {...register('name', { required: true })} />
        {errors.name && <p>Name is required</p>}
      </div>
      
      <div>
        <label>Salary:</label>
        <input {...register('salary', { required: true })} type="number" />
        {errors.salary && <p>Salary is required</p>}
      </div>

      <button type="submit">Add User</button>
    </form>
  )
}
