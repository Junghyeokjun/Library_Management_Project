package com.project.library_management.service;

import com.google.cloud.storage.Blob;
import com.google.cloud.storage.Bucket;
import com.google.cloud.storage.Storage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

//해당 서비스는 외부 api를 사용하는 서비스 이므로 인터페이스 없이 클래스만 구현하였습니다.
@Service
public class GoogleCloudStorageService {

    @Autowired
    private Storage storage;

    @Value("${spring.cloud.gcp.bucket-name}")
    private String bucketName;

    public String uploadFile(MultipartFile file) throws IOException {
        String blobName = UUID.randomUUID().toString() + "-" + file.getOriginalFilename();
        Bucket bucket = storage.get(bucketName);
        Blob blob = bucket.create(blobName, file.getInputStream(), file.getContentType());
        return blob.getMediaLink();
    }
}
