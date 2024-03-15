import {useUserContext} from '../context/UserContext.jsx';

function Footer() {
    const {firstName} = useUserContext();
    return (
        <footer>
            <p>
                Legal Stuff for <i>{firstName}</i>
            </p>
        </footer>
    );
}

export default Footer;
