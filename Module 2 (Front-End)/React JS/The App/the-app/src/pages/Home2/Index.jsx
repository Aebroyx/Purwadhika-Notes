import React from 'react'

class Home2 extends React.Component{

    componentDidMount(){
        console.log('Component Did Mount')
    }

    componentDidUpdate(){
        console.log('Component Did Update')
    }

    componentWillUnmount(){
        console.log('Component Will Unmount')
    }

    state = {
        number: 0
    }

    render(){
        return(
            <>
                <h1>
                    Home Page with Class Component
                </h1>
                <div className='flex flex-col justify-center items-center'>
                    <h2>
                        {this.state.number}
                    </h2>
                    <button className='btn bg-green-300' onClick={() => this.setState({number: 1})}>
                        Use State
                    </button>
                </div>
            </>
        )
    }
}

export default Home2