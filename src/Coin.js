import React, { useState } from 'react';
import Count from './Count';

const Coin = ({images}) => {
    const countDefault = {total:0, heads:0, tails:0};
    const [coin, setCoin] = useState('');
    const [count, setCount] = useState(countDefault);

    function getRandom(max) {
      return Math.floor(Math.random() * max);
    }

    function handleClick() {
      if(count.total > 9){ handleReset(); return; }
      const idx = getRandom(images.length);
      setCoin(images[idx]);
      setCount({ 
        ...count,
        total: count.total+=1,
        heads: idx === 0 ? count.heads+=1 : count.heads,
        tails: idx === 1 ? count.tails+=1 : count.tails
      });
    }

    function handleReset() {
      setCoin('');
      setCount(countDefault);
    }

    return (
        <div className='coin-container'>
            {coin ? <img className='coin-img' src={coin} alt="Coin" /> :
                <div className='coin-placeholder'></div>
            }
            <button
              style={{backgroundColor: count.total > 9 ? 'blue' : 'grey'}}
              onClick={handleClick}>
                {count.total > 9 ? 'RESET' : 'FLIP ME !'}
            </button>
            <Count 
                data-testid="test-count"
                total={count.total} 
                heads={count.heads} 
                tails={count.tails} />
        </div>
    )
}

export default Coin