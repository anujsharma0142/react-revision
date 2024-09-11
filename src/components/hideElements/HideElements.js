import React from 'react'

const HideElements = () => {
    const [status, setStatus] = React.useState(true);

    return (
        <>
            <div>{status ? <h1>Hello World!</h1> : null}
                <button onClick={() => setStatus(!status)}>Toggle</button>
            </div>


        </>

    )
}

export default HideElements