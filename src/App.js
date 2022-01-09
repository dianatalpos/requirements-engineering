import { Container } from "react-bootstrap"
import SignUpPage from  "./pages/SignUpPage"
import InternshipsListPage from './pages/InternshipsListPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoute from "./components/PrivateRoute"
import AddInternshipPage from "./pages/AddInternshipPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TbaPage from "./pages/TbaPage";
import InternshipDetailPage from "./pages/InternshipDetailPage";

function App() {
  return (<div>
      <Header/>
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
              <Route path="/add" element={<AddInternshipPage/>}/>
              <Route path="/features" element={<TbaPage/>}/>
              <Route path="/pricing" element={<TbaPage/>}/>
              <Route path="/about" element={<TbaPage/>}/>
              <Route path="/internship/*" element={<InternshipDetailPage/>}/>
            </Routes>

          </AuthProvider>


          </Router>
       </div>
      </Container>
          <Footer/>
      </div>
  );
}

export default App;
