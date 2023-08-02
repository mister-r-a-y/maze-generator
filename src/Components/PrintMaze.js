import React from 'react'
function PrintMaze() {
    
    let printContents = document.getElementById('printablediv').MazeControl;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;

  return (
    <div>
    </div>
  )
}

export default PrintMaze