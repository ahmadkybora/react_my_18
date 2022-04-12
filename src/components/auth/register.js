import React, { useState } from 'react';
import Joi from 'joi-browser';
import { Button, H, Input, TextArea } from '../../utils/tools';

const Register = () => {
    const schema = {
        first_name: Joi.string().min(3).max(25).required().label("First Name"),
        last_name: Joi.string().min(3).max(25).required().label("Last Name"),
        username: Joi.string().min(3).max(25).required().label("User Name"),
        email: Joi.string().min(3).max(25).required().label("Email"),
        password: Joi.string().min(8).max(25).required().label("Password"),
        password_confirmation: Joi.string().min(8).max(25).required().label("Confirmation Password"),
        mobile: Joi.string().min(8).max(25).required().label("Mobile"),
        home_phone: Joi.string().min(8).max(25).required().allow('').label("HomePhone"),
        work_phone: Joi.string().min(8).max(25).required().allow('').label("WorkPhone"),
        image: Joi.string().allow('').label("Image"),
        work_address: Joi.string().min(8).max(250).required().allow('').label("Work Address"),
        home_address: Joi.string().min(8).max(250).required().allow('').label("Home Address"),
    }
    const [edit, setEdit] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSelected, setIsSelected] = useState(false);
    const [showImg, setShowImg] = useState();

    return (
        <div className="offset-2 container mt-5">
            <div className="jumbotron">
                {edit ? <H type="1" value="Update Form" /> : <H type="1" value="Register Form" />}
                <form>
                    {errors && Object.values(errors).map(err => 
                        <div className="justify-content-center">
                            <div key={err} className="col-8 alert alert-danger">{err}</div>
                        </div>
                    )}

                    <div class="container">

                        <div className="row">
                            <div className="col-4">
                                <Input 
                                    type="text" 
                                    name="firstName" 
                                    className="form-control" 
                                    id="first-name" 
                                    value="" 
                                    placeholder="First Name ..."
                                />
                            </div>
                            <div className="col-4">
                                <Input 
                                    type="text" 
                                    name="last_name" 
                                    className="form-control" 
                                    id="last-name" 
                                    value="" 
                                    placeholder="Last Name ..."
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4">
                                <Input 
                                    type="text" 
                                    name="username" 
                                    className="form-control" 
                                    id="username" 
                                    value="" 
                                    placeholder="User Name ..."
                                />
                            </div>
                            <div className="col-4">
                                <Input 
                                    type="email" 
                                    name="email" 
                                    className="form-control" 
                                    id="email" 
                                    value="" 
                                    placeholder="Email ..."
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4">
                                <Input 
                                    type="number" 
                                    name="mobile" 
                                    className="form-control" 
                                    id="mobile" 
                                    value="" 
                                    placeholder="Mobile ..."
                                />
                            </div>
                            <div className="col-4">
                                <Input 
                                    type="email" 
                                    name="email" 
                                    className="form-control" 
                                    id="email" 
                                    value="" 
                                    placeholder="Email ..."
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4">
                                <Input 
                                    type="text" 
                                    name="password" 
                                    className="form-control" 
                                    id="password" 
                                    value="" 
                                    placeholder="Password ..."
                                />
                            </div>
                            <div className="col-4">
                                <Input 
                                    type="text" 
                                    name="confirma_password" 
                                    className="form-control" 
                                    id="confirma-password" 
                                    value="" 
                                    placeholder="Confirmation Password ..."
                                />
                            </div>
                        </div>

                        {/* <div className="row">
                            <div className="col-4">
                                <Input />
                                <div className="form-group col-md-4">
                                    <Input />
                                </div>
                            </div>
                        </div>

                        { isSelected === true ? 
                        <div className="col-md-4">
                            <img 
                                class="rounded-circle" 
                                src={showImg}
                                width="100px" 
                                height="100px" 
                            />
                        </div>
                        : '' }
                    
                        <TextArea />
                        <TextArea />
                        <TextArea /> */}

                        {edit ? 
                        <Button 
                            type="submit" 
                            name="" 
                            value="" 
                            className="" 
                            id=""
                        /> : 
                        <Button 
                            type="submit" 
                            name="" 
                            value="Register" 
                            className="btn btn-success" 
                            id=""
                        />}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register