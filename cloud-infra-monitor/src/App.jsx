import React, { useState, useEffect } from 'react';
import { cloudApi } from './api/cloudApi';
import Dashboard from './components/Dashboard';
import AddDataForm from './components/AddDataForm';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const response = await cloudApi.getAll();
            setData(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const addData = async (newData) => {
        try {
            const response = await cloudApi.create(newData);
            setData([...data, response.data]);
            toast.success('Proveedor agregado');
        } catch (error) {
            toast.error('Error al agregar');
        }
    };

    const deleteData = async (id) => {
        try {
            await cloudApi.delete(id);
            setData(data.filter(item => item.id !== id));
            toast.success('Proveedor eliminado');
        } catch (error) {
            toast.error('Error al eliminar');
        }
    };

    return (
        <div className="app">
            <Toaster position="top-right" />
            <header className="header">
                <h1>☁️ Cloud Infrastructure Monitor</h1>
                <p>Datos actualizados | Evolución Cloud 2026</p>
            </header>
            <main className="container">
                <AddDataForm onAdd={addData} />
                <Dashboard data={data} loading={loading} onDelete={deleteData} />
            </main>
        </div>
    );
}

export default App;