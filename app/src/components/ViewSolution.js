import React, { useContext } from 'react';
import { Context } from '../contexts/StateContext'
import { CgArrowLongLeft } from 'react-icons/cg';
import { CgArrowLongUp } from 'react-icons/cg';
import { CgArrowLongRight } from 'react-icons/cg';
import { CgArrowLongDown } from 'react-icons/cg';

const big = {
    width: 20 * 3,
    height: 20 * 3,
}

export function Points(props) {
  
    return (
        <div>
            {
                props.solution.find(e => e.point[0] === props.index_row && e.point[1] === props.index_col) && (
                    <div className="solution center " style={{opacity:1}}>O</div>
                )
            }
             {
                props.solution.map((x,index )=> (
                    x.left.find(e => e[0] === props.index_row && e[1] === props.index_col)  && (
                        <div key={index} className="solution center"><CgArrowLongLeft size="20" /></div>
                    )
                ))
            }
             {
                props.solution.map((x,index ) => (
                    x.top.find(e => e[0] === props.index_row && e[1] === props.index_col)  && (
                        <div key={index} className="solution center"><CgArrowLongUp size="20" /></div>
                    )
                ))
            }
            {
                props.solution.map((x,index ) => (
                    x.right.find(e => e[0] === props.index_row && e[1] === props.index_col)  && (
                        <div key={index} className="solution center"><CgArrowLongRight size="20" /></div>
                    )
                ))
            }
              {
                props.solution.map((x,index ) => (
                    x.botton.find(e => e[0] === props.index_row && e[1] === props.index_col)  && (
                        <div key={index} className="solution center"><CgArrowLongDown size="20" /></div>
                    )
                ))
            }
            
        </div>
    )
}

export default function ViewSolution() {
    const [globalState] = useContext(Context)
    const matriz = globalState.matriz
    const solution = globalState.solution
    console.log("solution calculada", solution)
    const listItems = matriz.map((row, index_row) => (
        <div key={index_row} className="g-row">
            {row.map((item, index_col) => (
                <div key={index_col}  className={item === 1 ? "g-col-1 " : "g-col-0 "} style={{ ...big }}>
                    < Points solution={solution} index_row={index_row} index_col={index_col} />
                </div>))}
        </div>
    )
    );

    return (
        <div className="grid">
            {listItems}
        </div>
    )
}
