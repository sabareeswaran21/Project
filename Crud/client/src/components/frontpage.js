import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';



export default function Front(){
    return(
        <>
        <div className="container-fluid">
            <div className='row bg-success'>
                <div className='col-lg-2 mt-2'>
                    <h1>A1SERVICE/CENTER</h1>
                </div>
                <div className='col-lg-6'></div>
                <div className='col-lg-4 text-center mt-3'>
                    <Link to={'/create'}>
                    <button type='button' id='button' name='button' className='btn btn-danger'> CreateAccount   </button> </Link>
                    <Link to={'/personalinfo'}>
                    <button type='button' id='button1' name='button1' className='btn btn-danger'>Personal Details </button> </Link>
                </div>
            </div>
        </div>
        </>
    )
}