import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

const AddDataForm = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        provider: '',
        marketShare: '',
        pricePerHour: '',
        mainUse: '',
        targetAudience: '',
        modelType: 'IaaS'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.provider) return;
        onAdd({
            ...formData,
            marketShare: parseFloat(formData.marketShare) || 0,
            pricePerHour: parseFloat(formData.pricePerHour) || 0
        });
        setFormData({ provider: '', marketShare: '', pricePerHour: '', mainUse: '', targetAudience: '', modelType: 'IaaS' });
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3><PlusCircle size={20} /> Agregar Proveedor Cloud</h3>
            <div className="form-grid">
                <input type="text" placeholder="Proveedor (AWS, Azure, GCP)" value={formData.provider} onChange={(e) => setFormData({...formData, provider: e.target.value})} required />
                <input type="number" step="0.1" placeholder="Market Share %" value={formData.marketShare} onChange={(e) => setFormData({...formData, marketShare: e.target.value})} />
                <input type="number" step="0.01" placeholder="Precio por hora USD" value={formData.pricePerHour} onChange={(e) => setFormData({...formData, pricePerHour: e.target.value})} />
                <input type="text" placeholder="Principal uso (IA, Web, Big Data)" value={formData.mainUse} onChange={(e) => setFormData({...formData, mainUse: e.target.value})} />
                <input type="text" placeholder="Ideal para (Startups, Empresas)" value={formData.targetAudience} onChange={(e) => setFormData({...formData, targetAudience: e.target.value})} />
                <select value={formData.modelType} onChange={(e) => setFormData({...formData, modelType: e.target.value})}>
                    <option>IaaS</option><option>PaaS</option><option>SaaS</option><option>Serverless</option>
                </select>
                <button type="submit">Agregar Proveedor</button>
            </div>
        </form>
    );
};

export default AddDataForm;