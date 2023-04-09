import React from 'react';

const Blog = () => {
    return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 text-center my-10">
        <div className=" text-justify">
          <h1 className="text-red-500 font-bold">What is useRef?</h1>
          <p>1. we can access dom element directly by useRef.</p>
          <p>2. if we use useRef no need to use state or onChange.</p>
          <p>
            3 if use directly DOM by useRef overall process will be slow so
            avoid it.
          </p>
          <p>
            4. we can't control useRef that's why we told it's uncontrolled
            component.
          </p>
          <p>
            5. If need only value and next time this value no need to use that
            time useRef can use.
          </p>

          <h1 className="text-red-500 font-bold">What is custom hook?</h1>
          <p>
            custom hook is a JavaScript function that starts with the use
            keyword.Custom hooks can be used to share stateful logic between
            components, abstracting away the implementation details and making
            it easier to reuse code.
          </p>
        </div>
        <div className='text-justify'>
          <h1 className="text-red-500 font-bold">
            When should use context api?
          </h1>
          <p>If We pass value by props drill so we pass value by parent component to child component like unidirectional but 
             if we pass value by the context api we don't need follow props drill.
             we can pass value from any component to another component. There is no boundary for value passing by the context api </p>
          <h1 className="text-red-500 font-bold">What is useMemo?</h1>
          <p>useMemo is a hook in React that allows you to memoize the result of a function call and avoid unnecessary re-executions of that function.
         When a component renders, any function calls inside it will be executed again, even if the inputs to those functions have not changed. This can be a performance issue, especially if the function call is expensive or involves heavy computations.</p>
        </div>
      </div>
    );
};

export default Blog;