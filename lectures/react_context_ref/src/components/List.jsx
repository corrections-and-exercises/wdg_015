import Card from './Cards.jsx';
import {useUserContext} from '../context/UserContext.jsx';

function List() {
    const {firstName} = useUserContext();
    return (
        <>
            {firstName && (
                <div className='list'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            )}
        </>
    );
}

export default List;
