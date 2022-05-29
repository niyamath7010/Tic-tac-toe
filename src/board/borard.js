
import { useEffect, useState } from "react"
import Square from "../square/square"
import "./board.css"

function Board(props){
    const [square,setSquare]=useState(Array(9).fill(null))
    const [xTurn,setXTurn]=useState(true)
    const callWinner=(is_XTurn)=>{
        let turnValue=is_XTurn? "O" : "X" 
        console.log("line 8", square);
        if(square[0]===turnValue && square[4]===turnValue && square[8]===turnValue ){
            props.getWinner(turnValue)
            return;
        }
    
        if(square[2]===turnValue && square[4]===turnValue && square[6]===turnValue ){
            props.getWinner(turnValue)
            return;
        }
        if(square[0]===turnValue && square[3]===turnValue && square[6]===turnValue ){
            props.getWinner(turnValue)
            return;
        }
        if(square[1]===turnValue && square[4]===turnValue && square[7]===turnValue ){
            props.getWinner(turnValue)
            return;
        }
        if(square[2]===turnValue && square[5]===turnValue && square[8]===turnValue ){
            props.getWinner(turnValue)
            return;
        }
        if(square[0]===turnValue && square[1]===turnValue && square[2]===turnValue ){
            props.getWinner(turnValue)
            return;
        }
        if(square[3]===turnValue && square[4]===turnValue && square[5]===turnValue ){
            props.getWinner(turnValue)
            return;
        }
        if(square[6]===turnValue && square[7]===turnValue && square[8]===turnValue ){
            props.getWinner(turnValue)
            return;
        }
    }
    useEffect(()=>{
        callWinner(xTurn)
    },[square])
    const handleClick=(i)=>{
        if(square[i]===null){
            setXTurn((turn)=>!turn)
            const newSquare=square.slice();
        if(xTurn){
            newSquare[i]="X"
        }else{
            newSquare[i]="O"
        }
        setSquare(()=>newSquare)
        console.log(square);
        }
        else{
            alert("Already Clicked")
        }
    }
    const renderSquare=(i)=>{
        return <Square value={square[i]} onClick={()=>{handleClick(i)}} />
    }
    const status=`Next player: ${xTurn? "X" : "O"}`
    return(
        <>
        <div className="status">{status}</div>
            <tr>
                <td>{renderSquare(0)}</td>
                <td>{renderSquare(1)}</td>
                 <td>{renderSquare(2)}</td>
                </tr>
            <tr>
                <td>{renderSquare(3)}</td>
                <td>{renderSquare(4)}</td>
                <td>{renderSquare(5)}</td>
                </tr>
            <tr>
                <td>{renderSquare(6)}</td>
                <td>{renderSquare(7)}</td>
                <td>{renderSquare(8)}</td>
            </tr>    
        </>
    )
}

export default Board