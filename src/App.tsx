
import './App.css'
import Grid from './components/Grid'

const config:number[][]=[[1,1,1],[1,0,1],[1,1,1]]



function App() {


  return (
    <>
   <Grid config={config}/>
    
    </>
  )
}

export default App
