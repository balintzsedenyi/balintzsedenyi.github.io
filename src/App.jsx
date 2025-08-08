import useWindowSize from './hooks/useWindowSize';

import Navigator from './Elements/Navigator';

export default function App() {
    const size = useWindowSize();
    console.log(size)
    return (
        <div className='base'>
            <Navigator />
        </div>
    );
}
