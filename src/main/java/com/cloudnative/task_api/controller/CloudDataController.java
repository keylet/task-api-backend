package com.cloudnative.task_api.controller;

import com.cloudnative.task_api.model.CloudData;
import com.cloudnative.task_api.repository.CloudDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/cloud-data")
@CrossOrigin(origins = "*")
public class CloudDataController {

    @Autowired
    private CloudDataRepository cloudDataRepository;

    // GET /api/cloud-data - Obtener todos
    @GetMapping
    public List<CloudData> getAll() {
        System.out.println("📋 GET /api/cloud-data - Obteniendo todos los proveedores");
        return cloudDataRepository.findAll();
    }

    // GET /api/cloud-data/provider/{provider} - Obtener por proveedor
    @GetMapping("/provider/{provider}")
    public List<CloudData> getByProvider(@PathVariable String provider) {
        System.out.println("🔍 GET /api/cloud-data/provider/" + provider);
        return cloudDataRepository.findByProvider(provider);
    }

    // POST /api/cloud-data - Crear nuevo
    @PostMapping
    public CloudData create(@RequestBody CloudData data) {
        System.out.println("✨ POST /api/cloud-data - Creando: " + data.getProvider());
        return cloudDataRepository.save(data);
    }

    // PUT /api/cloud-data/{id} - Actualizar
    @PutMapping("/{id}")
    public ResponseEntity<CloudData> update(@PathVariable UUID id, @RequestBody CloudData dataDetails) {
        System.out.println("✏️ PUT /api/cloud-data/" + id);
        return cloudDataRepository.findById(id)
                .map(data -> {
                    data.setProvider(dataDetails.getProvider());
                    data.setMarketShare(dataDetails.getMarketShare());
                    data.setPricePerHour(dataDetails.getPricePerHour());
                    data.setMainUse(dataDetails.getMainUse());
                    data.setTargetAudience(dataDetails.getTargetAudience());
                    data.setModelType(dataDetails.getModelType());
                    return ResponseEntity.ok(cloudDataRepository.save(data));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // DELETE /api/cloud-data/{id} - Eliminar
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id) {
        System.out.println("🗑️ DELETE /api/cloud-data/" + id);
        if (cloudDataRepository.existsById(id)) {
            cloudDataRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}