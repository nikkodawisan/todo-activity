import Form from "./Form";
import { useState } from 'react';

const Todo = () => {
          //receiver setter  
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    
    const [sum, setSum] = useState('');
    const [product, setProduct] = useState('');
    const [division, setDivision] = useState('');
    const [sub, setSub] = useState('');
    
    
    
    const handleFormSubmit = (e)=> {
    e.preventDefault();
    
      
      //Addition
      let sum = parseInt(num1) + parseInt(num2);
      setSum(sum);  

      //Multiplication
      let product = parseInt(num1) * parseInt(num2);
      setProduct(product);  

      
      //Division
      let division = parseInt(num1) / parseInt(num2);
      setDivision(division);  




      //Substraction
      let sub = parseInt(num1) - parseInt(num2);
      setSub(sub);  

    }   

    return (
        <div className='Todo'>
         <div className="sum">Sum is : { (sum !== 0) ? sum : 'no result yet'} </div>
        <div className="product">Product is : { (product !== 0) ? product : 'no result yet'} </div>
        <div className="division">Quotient is : { (division !== 0) ? division : 'no result yet'} </div>
        <div className="sub">Difference is : { (sub !== 0) ? sub : 'no result yet'}  </div>

           <Form 
            numero_uno = {num1}
            numero_dos = {num2}
            setNum1 = {setNum1}
            setNum2 = {setNum2}
            handleFormSubmit = {handleFormSubmit} 
           /> 

        </div>

        
        
    )

    

}




export default Todo