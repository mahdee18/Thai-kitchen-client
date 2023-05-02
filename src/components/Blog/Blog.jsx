import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <div className='p-12 text-center'>
                    <h1 className='py-12 text-4xl font-sans'>Here are the 4 questions answer!</h1>
                    <div tabIndex={0} className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-8">
                        <div className="collapse-title text-xl font-medium bg-purple-300">
                            1.Tell us the differences between uncontrolled and controlled components?
                        </div>
                        <div className="collapse-content text-sm sm:text-base ">
                            <p className='py-5'>In React, controlled components are those that are bound to a state value and are modified via user input by updating the state value. They rely on the parent component to manage the state and handle all user input.
                                <br />
                                In contrast, uncontrolled components are components that do not rely on a state value to function, but instead manage their own state internally through the DOM. They are usually created using refs in React. Controlled components provide a more reliable way of managing state, while uncontrolled components are easier to set up but may lead to inconsistencies.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-5">
                        <div className="collapse-title text-xl font-medium bg-purple-300">
                            2.How to validate React props using PropTypes?
                        </div>
                        <div className="collapse-content text-sm sm:text-base ">
                            <p className='py-5'>
                                React PropTypes is a type checking library that allows developers to validate the props being passed to a React component. It can help catch bugs early by checking that the props are of the expected type. <br />
                                <br />
                                By using PropTypes to validate our props, we can catch errors and improve the robustness of our React components.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-5">
                        <div className="collapse-title text-xl font-medium bg-purple-300">
                            3.Tell us the difference between nodejs and express js.?
                        </div>
                        <div className="collapse-content text-sm sm:text-base ">
                            <p className='py-5'><strong>Node.js:</strong> is a JavaScript runtime that allows developers to run JavaScript code on the server-side. It uses the V8 JavaScript engine from Google Chrome to execute JavaScript code outside of the browser environment. Node.js provides a rich set of built-in modules for working with file system, networking, and other aspects of server-side development.
                            <br />
                            <br />
                            <strong>Express.js:</strong> is a lightweight and flexible web application framework built on top of Node.js. It provides a set of features and utilities for building web applications and APIs, such as routing, middleware, and HTTP request/response handling. Express.js allows developers to easily create server-side applications and APIs, and it has a wide range of community-contributed middleware and plugins that can extend its functionality.
                            </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-5">
                        <div className="collapse-title text-xl font-medium bg-purple-300">
                            4.What is useMemo?
                        </div>
                        <div className="collapse-content text-sm sm:text-base ">
                            <p className='py-5'><strong>useMemo:</strong> is a React hook that is used to memoize the result of a function so that it is only recomputed when its dependencies have changed. It is used to optimize the performance of the application by preventing unnecessary re-renders. When a component renders, all of its functions and variables are re-evaluated, which can be a costly operation. By using useMemo, we can memoize the result of a function so that it is only re-evaluated when its dependencies change. This can be especially useful for expensive computations or when dealing with large data sets. </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;