import PropTypes from 'prop-types';
import { useEffect, useRef} from 'react';

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(()=>{
        nameRef.current.focus()
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" id="" />
                <br />
                <input ref={emailRef} placeholder='Enter Your Email Address' type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} type="password" name="password" required id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

RefForm.propTypes = {

};

export default RefForm;