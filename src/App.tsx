import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Challenge } from './pages/Challenge'
import { Exhibition } from './pages/Exhibition'
import { Awards } from './pages/Awards'
import './styles/global.css'

export default function App() {
  return <BrowserRouter><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/challenge" element={<Challenge/>}/><Route path="/exhibition" element={<Exhibition/>}/><Route path="/awards" element={<Awards/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes></BrowserRouter>
}
