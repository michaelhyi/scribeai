package com.api.record;

import com.api.record.dto.RecordCreateRequest;
import com.api.record.dto.RecordUpdateRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/record")
@AllArgsConstructor
public class RecordController {
    private final RecordService service;

    @PostMapping
    public ResponseEntity<Long> createRecord(@RequestBody RecordCreateRequest req) {
        return ResponseEntity.ok(service.createRecord(req));
    }

    @GetMapping("{id}")
    public ResponseEntity<Record> readRecord(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.readRecord(id));
    }

    @GetMapping
    public ResponseEntity<List<Record>> readAllRecordsByPatientId(@RequestParam("patientId") Long patientId) {
        return ResponseEntity.ok(service.readAllRecordsByPatientId(patientId));
    }
}