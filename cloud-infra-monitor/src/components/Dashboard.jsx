import React from 'react';
import { Cloud, Cpu, Globe, TrendingUp, DollarSign, Zap } from 'lucide-react';

const Dashboard = ({ data, loading, onDelete }) => {
    if (loading) {
        return <div className="loading">Cargando datos de infraestructura cloud...</div>;
    }

    const getIcon = (provider) => {
        switch(provider?.toLowerCase()) {
            case 'aws': return '☁️';
            case 'azure': return '🔷';
            case 'gcp': return '🟢';
            case 'cloudflare': return '🌩️';
            default: return '💻';
        }
    };

    return (
        <div className="dashboard">
            <div className="stats-grid">
                <div className="stat-card">
                    <TrendingUp size={32} />
                    <h3>Proveedores</h3>
                    <p>{data.length} registros</p>
                </div>
                <div className="stat-card">
                    <Globe size={32} />
                    <h3>Cobertura Global</h3>
                    <p>300+ regiones</p>
                </div>
                <div className="stat-card">
                    <Zap size={32} />
                    <h3>Edge Computing</h3>
                    <p>&lt;50ms latencia</p>
                </div>
            </div>

            <h2>📊 Proveedores Cloud</h2>
            <div className="providers-grid">
                {data.map((item) => (
                    <div key={item.id} className="provider-card">
                        <div className="provider-header">
                            <span className="provider-icon">{getIcon(item.provider)}</span>
                            <h3>{item.provider?.toUpperCase()}</h3>
                            <button onClick={() => onDelete(item.id)} className="delete-btn">🗑️</button>
                        </div>
                        <div className="provider-content">
                            <p><strong>📈 Market Share:</strong> {item.marketShare}%</p>
                            <p><strong>💰 Precio base:</strong> ${item.pricePerHour}/hora</p>
                            <p><strong>⚡ Principal uso:</strong> {item.mainUse}</p>
                            <p><strong>🎯 Ideal para:</strong> {item.targetAudience}</p>
                        </div>
                        <div className="provider-badge">{item.modelType}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;