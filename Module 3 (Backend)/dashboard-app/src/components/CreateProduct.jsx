'use client'
    import { useState } from "react";
    import axios from "axios"
    import {Field, Form , Formik, ErrorMessage} from "formik"
    import * as yup from 'yup' 
    import { useMutation } from "@tanstack/react-query"

    
export default function Page() {

    const [file,setFiles] = useState([])
    const onSetFile = (event) => {
        const arrFiles = [...event.target.files]
        if(arrFiles.length > 3 || arrFiles.length === 0 ) return alert ('Max 3 Images Only!')

        arrFiles.forEach(item=> {
            if(item.type.split('/')[0] !== 'image') return alert(`${item.name} is not an image`)
            if(item.size >500000) return alert(`${item.name} Size too Large. Maximum Size 5Byte`)
        })
        setFiles(arrFiles)
    }

    const createProductSchema = yup.object().shape({
        name: yup.string()
        .min(10, 'Product Name Have Mininum 10 characters')
        .max(50, 'Product Name Have Maxinum 50 characters')
        .required('Product Name is required'),

        price: yup.number()
        .min(1, 'Product Price Mininum = Rp.1'),

        description: yup.string()
        .min(1, 'Product Name Have Mininum 1 characters')
        .max(100, 'Product Name Have Maxinum 50 characters')
        .required('Password is required'),

        stock: yup.number()
        .min(1, 'Product Stock Mininum 1')
        .max(100, 'Product Stock Maxinum 100')
    })

    const {mutate} = useMutation({
        mutationFn: async ({name, price, description, stock}) => {
            const formData = new FormData()
            formData.append('data', JSON.stringify({name, price, description, stock}))

            file.forEach(item => {
                formData.append('bebas', item)
            })

            await axios.post('http://localhost:5000/products/create', formData)
        },
        onSuccess: () => {
            alert('Success')
        },
        onError : (error) =>{
            alert(error)
        }
    })
    return (
        
        <div className="flex items-center justify-center">
            <Formik
            initialValues={{ name : '', price : '', description : '', stock: ''}}
            validationSchema={createProductSchema}
            onSubmit={async(values) => {
                const {name, price, description, stock} = values
                if(file.length === 0) return alert('Please Upload Image')

                await mutate({name, price, description, stock})
            }}
            >
            {({dirty , isValid}) => (
                <Form>
                <div className="flex flex-col justify-center gap-6">
                <label>
                <div>
                    <span>Name</span>
                </div>
                <Field 
                    name ="name"
                    type ="name"
                >{({field}) => (
                    <input {...field}
                    placeholder="Enter Product Name"
                    className="input border-2 bg-base-100 w-full" 
                    />  
                )}   
                </Field>
                <ErrorMessage name="name"
                />
                </label>
                <label>
                <div>
                    <span>Price</span>
                </div>
                <Field 
                    name ="price"
                >{({field}) => (
                    <input {...field}
                    type ="number"
                    placeholder="Enter Product Price"
                    className="input border-2 bg-base-100 w-full" 
                    />  
                )}   
                </Field>
                <ErrorMessage name="price"
                />
                </label>
                <label>
                <div>
                    <span>Description</span>
                </div>
                <Field 
                    name ="description"
                    type ="text"
                >{({field}) => (
                    <input {...field}
                    placeholder="Enter Product Description"
                    className="input border-2 bg-base-100 w-full" 
                    />  
                )}   
                </Field>
                <ErrorMessage name="description"
                />
                </label>
                <label>
                <div>
                    <span>Stock</span>
                </div>
                <Field 
                    name ="stock"
                >{({field}) => (
                    <input {...field}
                    type ="number"
                    placeholder="Enter Product Stock"
                    className="input border-2 bg-base-100 w-full" 
                    />  
                )}   
                </Field>
                <ErrorMessage name="stock"
                />
                </label>
                <label>
                <div>
                    <span>Select Images</span>
                </div>
                    <input
                    type ="file"
                    accept="image/*"
                    multiple
                    onChange={(event) => onSetFile(event)}
                    placeholder="Enter Product Stock"
                    className="input border-2 bg-base-100 w-full" 
                    />  
            
                </label>
                <button type="submit" 
                disabled={!(dirty && isValid)}
                className="btn btn-primary">
                    Create Product
                </button>
                </div>
                
                </Form>
            )}
            </Formik>
        </div>
    )
}