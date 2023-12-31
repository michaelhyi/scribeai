package com.api.record;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecordRepository extends JpaRepository<Record, Long> {
    List<Record> findAllByPatientIdOrderByCreatedAtDesc(Long patientId);
    List<Record> findAllByUserIdOrderByCreatedAtDesc(Long userId);

}
