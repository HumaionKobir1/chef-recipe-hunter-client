import React from 'react';
import Pdf from 'react-to-pdf'
const ref = React.createRef();


const Blog = () => {

    return (
        <div className='w-full md:w-5/6 mx-auto px-3 mt-12 mb-12'>
            <div className='w-32 mx-auto mb-7'>
            <Pdf  targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className='bg-orange-400 px-3 py-2 rounded-lg' onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            </div>

            <div className='mb-3' ref={ref}>
                <div >
                <h1 className='text-xl'>1. Differences between uncontrolled and controlled components.</h1>
                <p>Ans: <small>Controlled components, on the other hand, have their state and behavior controlled by their parent components.
                Some examples of uncontrolled components are HTML form elements like input, select, and textarea. Controlled components, on the other hand, are typically implemented as React components that receive their state as props from their parent component.</small></p>
                </div>

                <div>
                    <h1 className='text-xl'>. 2How to validate React props using PropTypes</h1>
                    <p>Ans: <small>To validate React props using PropTypes, first, import the PropTypes module from the 'prop-types' package. Then, define the propTypes object for the component, specifying the expected type and other optional constraints for each prop.</small></p>
                </div>


                <div className='mt-3 mb-3'>
                    <h1 className='text-xl'>3. Tell us the difference between nodejs and express js.</h1>
                    <p>Ans: <small>To validate React props using PropTypes, first, import the PropTypes module from the 'prop-types' package. Then, define the propTypes object for the component, specifying the expected type and other optional constraints for each prop.</small></p>
                </div>



                <div>
                    <h1 className='text-xl'>4. What is a custom hook, and why will you create a custom hook?</h1>
                    <p>Ans: <small>A custom hook is a function in React that uses one or more built-in hooks and encapsulates a specific behavior or functionality. You would create a custom hook to promote code reuse, improve readability and maintainability, and abstract away implementation details from components.</small></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;