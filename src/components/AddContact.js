import { useForm } from "react-hook-form";
import api from "../utils/jwtInterceptor";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

      const onSubmit = (data) => {
        console.log(data);
        saveContact(data);
      }

      const saveContact = (data) => {
        api.post('contacts', data).then(data => {
            console.log(data)
            if(data?.status === 201) {
                navigate('/contacts');
            }
        }).catch(err => {
            console.log(err)
        })
      }

    
      return(
        <div className="w-1/2 flex mx-auto">
            <form className="w-1/2 flex mx-auto px-auto items-center justify-center flex-col" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center flex-col ">
                    <label>Name</label>
                    <input className='border-2' type="text" name="name" {...register('name', {required: 'Name is required', 
                        pattern: {
                            value: /[A-z]/g,
                            message: 'Invalid name'
                            }
                    })} />
                    {errors && errors.name && <span className="text-red-800 text-xs">{errors.name.message}</span>}
                </div>
                <div className="flex justify-center flex-col">
                    <label>Email</label>
                    <input className='border-2' type="text" name="email" {...register('email', {required: 'Email is required',
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            message: 'Invalid email'
                            }
                    })} />
                    {errors && errors.email && <span className="text-red-800 text-xs">{errors.email.message}</span>}

                </div>
                <div className="flex justify-center flex-col">
                    <label>Phone</label>
                    <input className='border-2' type="text" name="phone" {...register('phone', {required: 'Phone is required',
                        pattern: {
                            value: /[0-9]/g,
                            message: 'Invalid email'
                        },
                        minLength: {
                            value: 10,
                            message: 'Please enter a valid phone number'
                        },
                        maxLength: {
                            value: 10,
                            message: 'Please enter a valid phone number'
                        }
                    })} />
                    {errors && errors.phone && <span className="text-red-800 text-xs">{errors.phone.message}</span>}
                </div>

                <input type="submit" className="flex justify-center flex-col"></input>
            </form>
        </div>
      )
}

export default AddContact;