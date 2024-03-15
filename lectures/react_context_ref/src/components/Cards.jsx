import {useUserContext} from '../context/UserContext.jsx';

function Card() {
    const {firstName} = useUserContext();
    return (
        <div className='card'>
            <p>Friend</p>
            <p className='card-description'>
                list of <i>{firstName}</i>
            </p>
        </div>
    );
}

export default Card;
