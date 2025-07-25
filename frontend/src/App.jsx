import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { ThemeProvider } from "./context/ThemeProvider"

function App() {

 return (
  <>
   <BrowserRouter>
    <ThemeProvider>
     <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="" /> */}
     </Routes>
    </ThemeProvider>
   </BrowserRouter>
  </>
 )
}

export default App
