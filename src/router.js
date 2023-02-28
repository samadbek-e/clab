import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Courses from "./pages/courses";
import Home from './pages/home'
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Home />}>
            <Route path="courses" element={<Courses />} /> 
        </Route>
    )
)
export default router