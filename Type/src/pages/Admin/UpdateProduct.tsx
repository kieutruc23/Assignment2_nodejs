import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
// import { GetOne } from '../../API/product';
import { render } from 'react-dom';
interface formData {
    name: string,
    price: number,
    description: string,
    image: string,
}
const UpdateProduct = (props: any) => {
    const [Image, SetImage] = useState("");
    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate()
    const { id } = useParams();
    useEffect(() => {
        const CurrentProduct = props?.products?.find((data: any) => data._id == id);
        console.log(CurrentProduct);
        reset(CurrentProduct)
    }, [props])
    const OnHandleSubmit = async (data: any) => {
        props.OnUpdate(data);
        // navigate("Admin/Show")
    }
    return (
        <div>
            <form onSubmit={handleSubmit(OnHandleSubmit)} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Cập nhật Name</label>
                    <input type="text" className="form-control" {...register("name")} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Cập nhật Price</label>
                    <input type="number" className="form-control" {...register("price")} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Cập nhật Price</label>
                    <input type="text" className="form-control" {...register("image")} id="exampleInputPassword1" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Cập nhật Description</label>
                    <textarea className="form-control" {...register("description")} id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={() => window.open('/Admin/products/')}>Cập nhật sản phẩm</button>
            </form>

        </div>
    )
}

export default UpdateProduct