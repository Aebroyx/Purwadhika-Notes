import FrontImage1 from './../../assets/frontimg1.png'
import FrontImage2 from './../../assets/frontimg2.png'

export default function Home() {
    return(
        <>
            <div className='flex'>
                <div>
                    <img src={FrontImage1} alt="frontimg1" className='flex-1' />
                </div>
                <div>
                    <img src={FrontImage2} alt="frontimg2" className='flex-1'/>
                </div>
            </div>

            <div className='flex justify-center items-center pt-3 pb-7'>
                <div style={{backgroundColor: 'white', width: '24px' , height: '6px', borderRadius: '100px'}}></div>
            </div>

            <h1 className='text-2xl pl-10 font-bold'>
                HOT ITEMS
            </h1>
            <div className='bg-blue-500 flex flex-row'>
                <div>
                    01
                </div>
                <div>
                    02
                </div>
                <div>
                    03
                </div>
                <div>
                    04
                </div>
                <div>
                    05
                </div>
                <div>
                    06
                </div>
                <div>
                    07
                </div>

            </div>
        </>
    )
}