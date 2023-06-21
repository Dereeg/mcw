import React from 'react'


// {Array(Math.floor(w/minWidth)).forEach((value, j) => <td> [{i}][{j}]</td>)}

const genBody = (noRow, noCol) => (
    <tbody>
        {Array(noRow).fill().map((row, rowIndex) => {
            return (
                <tr id={rowIndex}>
                    {
                    Array(noCol).fill().map((object, i) => (
                        <a href={rowIndex + "_" + i}>
                            <td style={{borderBlock: 'solid black'}} obj={object} id={rowIndex + "_" + i}>
                                [{rowIndex}][{i}]
                            </td>
                        </a>))
                    }
                </tr>
            )
        })}
    </tbody>
)

const Canvas = ({ h, w, minHeight, minWidth }) => {
    const noCol = Math.floor(w / minWidth)
    const noRow = Math.floor(h / minHeight)

    return (
        <div id="main_canvas">
            <p>Main Canvas</p>
            <table>
                {genBody(noRow, noCol)}
            </table>
        </div>
    )
}
export default Canvas