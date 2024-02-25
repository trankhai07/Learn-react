
import { useState } from 'react';
import CardItem from '../sessions/CardItem';
import { Back } from '../model/background.model';
import CountItem from '../sessions/CountItem';
const Homepage = () => {
    const [useBacks, setBacks] = useState<Back[]>(
        [
            { id: '1', title: 'Back 1', content: 'content 1' },
            { id: '2', title: 'Back 2', content: 'content 3' },
            { id: '3', title: 'Back 3', content: 'content 3' },
        ]
    );
    const [count, setCount] = useState(0);
    const [isCount, setIsCount] = useState(false);
    const handleRemoveContent = () => {

    }
    return (
        <>
            {console.log("Template Home")}
            <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto' }}>
                <div className="wrapper-card-items">
                    {
                        useBacks.map((Item) => (<CardItem id={Item.id} title={Item.title} content={Item.content} handleRemoveContent={handleRemoveContent} />))
                    }
                </div>
                <br></br>
                <button onClick={() => setIsCount(true)}>Open Count</button>
                <button onClick={() => setIsCount(false)}>Close Count</button>
                <div>{count}</div>
                {
                    isCount && <CountItem count={count} setCount={(count) => setCount(count)} />
                }
            </div>
        </>
    );
};
export default Homepage;