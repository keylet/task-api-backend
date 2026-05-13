package com.cloudnative.task_api.model;


import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "cloud_data")
public class CloudData {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String provider;
    private Double marketShare;
    private Double pricePerHour;
    private String mainUse;
    private String targetAudience;
    private String modelType;

    public CloudData() {}

    public CloudData(String provider, Double marketShare, Double pricePerHour, String mainUse, String targetAudience, String modelType) {
        this.provider = provider;
        this.marketShare = marketShare;
        this.pricePerHour = pricePerHour;
        this.mainUse = mainUse;
        this.targetAudience = targetAudience;
        this.modelType = modelType;
    }

    // Getters y Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getProvider() { return provider; }
    public void setProvider(String provider) { this.provider = provider; }

    public Double getMarketShare() { return marketShare; }
    public void setMarketShare(Double marketShare) { this.marketShare = marketShare; }

    public Double getPricePerHour() { return pricePerHour; }
    public void setPricePerHour(Double pricePerHour) { this.pricePerHour = pricePerHour; }

    public String getMainUse() { return mainUse; }
    public void setMainUse(String mainUse) { this.mainUse = mainUse; }

    public String getTargetAudience() { return targetAudience; }
    public void setTargetAudience(String targetAudience) { this.targetAudience = targetAudience; }

    public String getModelType() { return modelType; }
    public void setModelType(String modelType) { this.modelType = modelType; }
}