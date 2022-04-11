import React from 'react'
import Joi from 'joi-browser';
import { Button, H, Input } from '../../utils/tools';
import { DAlert } from '../../utils/styles/style';

const Login = () => {
    const schema = {
        username: Joi.string().min(3).max(25).required().label("نام کاربری"),
        password: Joi.string().min(8).max(25).required().label("رمز عبور")
    }
    const { errors } = "";
    return (
        <div className="container offset-md-4 mt-5">
            <div className="jumbotron">
                <H 
                    type="1" 
                    value="Login Form" 
                    className="" 
                />
                <form>
                    {errors && Object.values(errors).map(err => 
                        <div key={err} className={DAlert}>{err}</div>
                    )}

                    <div className="col-4">
                        <Input 
                            type="text" 
                            name="username" 
                            className="form-control" 
                            id="username" 
                            value="" 
                            placeholder="UserName ..."
                        />
                    </div>

                    <div className="col-4">
                        <Input 
                            type="password" 
                            name="password" 
                            className="form-control" 
                            id="password" 
                            value="" 
                            placeholder="Pasword"
                        />
                    </div>

                    <div className="col-4">
                        <Button 
                            type="submit" 
                            name="" 
                            value="Login" 
                            className="btn btn-success" 
                            id="" 
                        />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login