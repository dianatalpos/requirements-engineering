import { Container } from "react-bootstrap"
import SignUpPage from  "./pages/SignUpPage"
import InternshipsListPage from './pages/InternshipsListPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
      <Container className="d-flex align-items-center justify-content-center"
               style={{minHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth: "400px"}}>
          <Router>
          <AuthProvider>
            <Routes>
              <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path='/' element={<InternshipsListPage/>}/>
              </Route>
              <Route path="/signup" element={<SignUpPage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
            </Routes>

          </AuthProvider>


          </Router>
       </div>
      </Container>
  );
}

export default App;
