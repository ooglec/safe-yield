import { Route, Routes } from "react-router-dom"
import LandingPage from "../pages/Landing"

const AppRoutes = () => {

    return(
        <Routes>
            <Route index element={<LandingPage/>} />
        </Routes>
    )
}

export default AppRoutes