import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import CounterContainer from "./pages/CounterContainer";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/counter" element={<CounterContainer />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;