package com.cloudnative.task_api.repository;



import com.cloudnative.task_api.model.CloudData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.UUID;

@Repository
public interface CloudDataRepository extends JpaRepository<CloudData, UUID> {
    List<CloudData> findByProvider(String provider);
}