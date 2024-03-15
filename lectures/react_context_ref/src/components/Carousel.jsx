import {useRef} from 'react';

function Carousel() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    function handleClick(ref) {
        console.log(ref);
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });
    }

    return (
        <div className='carousel'>
            <img
                ref={ref1}
                onClick={() => handleClick(ref1)}
                src='https://images.unsplash.com/photo-1709895353959-5e170f933758?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <img
                ref={ref2}
                onClick={() => handleClick(ref2)}
                src='https://images.unsplash.com/photo-1710237103624-77e1c5b612a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <img
                ref={ref3}
                onClick={() => handleClick(ref3)}
                src='https://images.unsplash.com/photo-1705499438100-fff66a0fce50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
        </div>
    );
}

export default Carousel;
