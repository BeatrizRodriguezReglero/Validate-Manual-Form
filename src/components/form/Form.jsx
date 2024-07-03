import { useState } from "react";
import {  StyledForm, StyledInput, StyledErrorText  } from "./form.styles";






const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        mail: '',
        password: '',
        errors: {
            name: true,
            lastname: true,
            mail: true,
            password: true,
         }
    });

   

    return (
        <StyledForm onSubmit={handleSubmit}>
            <label htmlFor="name" >
                <img src="" alt=""  style={{ visibility: formData.errors.name ? 'visible' : 'hidden' }}/>
                <StyledInput 
                    type="text"
                    name="name"
                    id="name"
                    
                    placeholder="Name"
                    onInput={(event) => changeDataValues(event.target,formData, setFormData)}
                />
               {!formData.errors.name && <StyledErrorText >El nombre no es Válido</StyledErrorText>} 
            </label>
            <label htmlFor="lastname">
                <img src="" alt="" style={{ visibility: formData.errors.lastname ? 'visible' : 'hidden' }} />
                <StyledInput
                    type="text"
                    name="lastname"
                    id="lastname"
                   
                    placeholder="Last Name"
                    onInput={(event) => changeDataValues(event.target,formData, setFormData)}
                />
                {!formData.errors.lastname && <StyledErrorText >El Apellido no es Válido</StyledErrorText>} 
               
            </label>
            <label htmlFor="mail">
                <img src="" alt="" style={{ visibility: formData.errors.mail ? 'visible' : 'hidden' }} />
                <StyledInput
                    type="email"
                    name="mail"
                    id="mail"
                    
                    placeholder="Email Address"
                    onInput={(event) => changeDataValues(event.target,formData, setFormData)}
                />
                {!formData.errors.mail && <StyledErrorText >El mail no es Válido</StyledErrorText>} 
                
            </label>
            <label htmlFor="password">
                <img src="" alt="" style={{ visibility: formData.errors.password ? 'visible' : 'hidden' }} />
                <StyledInput
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onInput={(event) => changeDataValues(event.target,formData, setFormData)}
                />
                {!formData.errors.password && <StyledErrorText >La contraseña debe de tener letras mayúsculas, minúsculas y un carácter especial</StyledErrorText>}
                
            </label>
            <button type="submit" value="CLAIM YOUR FREE TRIAL">CLAIM YOUR FREE TRIAL</button>
            
           
            <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
        </StyledForm>
    );
};

const handleSubmit = (event,formData) => {
    
    event.preventDefault();
    // Lógica de envío del formulario

    console.log('Form submitted:', formData);
};

const validateForm = (name, value,formData, setFormData) => {
    const formatedValue = value.trim();//para quitar espacios de los campos que rellenen
    const regexName = /^[a-zñ]+$/i;//expresion regular que solo sean letras de la A a la Z (minuscula-mayusculas)
    const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//expresion regular para email
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;//expresion regular para contraseñas, que contenga letras minusculas y mayusculas , que contengan al menos un caracter especial. Longitud minima de 6 caracteres
    
   

    if(name==='name'){
       const isValidName=regexName.test(formatedValue)  || !formatedValue === "";
       setFormData({...formData,[name]: value, errors: {...formData.errors, name: isValidName}})
    
        
        
    }else if(name==='lastname'){
        const isValidLastName=regexName.test(formatedValue)  || !formatedValue === "";
        setFormData({...formData,[name]: value, errors:{...formData.errors, lastname: isValidLastName}})
        

    }else if(name==='mail'){

        const isValidMail=regexMail.test(formatedValue) || !formatedValue === ""
        setFormData({...formData,[name]: value, errors:{...formData.errors, mail: isValidMail}})
    }else if(name==='password'){
        const isValidPassword=regexPassword.test(formatedValue) || !formatedValue === ""
        setFormData({...formData,[name]: value, errors:{...formData.errors, password: isValidPassword}})
    }

    console.log('has validado todo')
    
    // Añadir validación para otros campos según sea necesario*/
};

const changeDataValues = (input,formData, setFormData) => {
    const { name, value } = input;
    
    validateForm(name, value,formData, setFormData);
};
export default Form;