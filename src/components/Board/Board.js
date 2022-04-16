import MemoBlock from '../MemoBlock/MemoBlock';
import './Board.css';

const Board = ({animating, handleMemoClick, memoBlocks,moves}) => {
    return (
        <>
        <header className="b-tittle">
        <h2 className="b-tittle-font">🍓🍒MEMORY GAME FRUITS🍒🍓</h2>
        <div>
          
        </div>
      </header>
        <main className="board">
        
            {memoBlocks.map( (memoBlock, i) => {
                return <MemoBlock key={`${i}_${memoBlock.emoji}`} animating={animating} handleMemoClick={handleMemoClick} memoBlock={memoBlock} />
            })}
            <div className="b-moves">
            <h3 className="b-moves-font">Moves:{moves}</h3> 
            
          </div>
        </main>
        </>
        
    );
}

export default Board;