package com.project.library_management.service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.Bucket;
import com.google.cloud.storage.Storage;
import com.project.library_management.util.ByteArrayMultipartFile;

import net.coobird.thumbnailator.Thumbnails;

//해당 서비스는 외부 api를 사용하는 서비스 이므로 인터페이스 없이 클래스만 구현하였습니다.
@Service
public class GoogleCloudStorageService {

    @Autowired
    private Storage storage;

    @Value("${spring.cloud.gcp.bucket-name}")
    private String bucketName;

    @Value("${spring.book.default.image-path}")
    private String defaultImagePath;
    
    @Value("${spring.book.default.cloud-path}")
    private String cloudPath;
    
    //gcs 파일업로드
    public String uploadFile(MultipartFile file) throws IOException {
    	if(file==null)
    		return defaultImagePath;
    	
    	MultipartFile resizingFile=resizeImage(file,255,370);
    	
        String blobName = UUID.randomUUID().toString() + "-" + file.getOriginalFilename();
        Bucket bucket = storage.get(bucketName);
        bucket.create(blobName, resizingFile.getInputStream(), file.getContentType());
        String publicUrl=cloudPath+bucketName+"/"+blobName;
        
        return publicUrl;
    }
    
    //gcs 파일삭제
    public boolean deleteFileFromUrl(String fileUrl) {
    	
    	//이미지 파일이 디폴트 이미지일경우
    	if(fileUrl.equals(defaultImagePath)) {
    		return true;
    	}
    	
        String objectName = extractObjectNameFromUrl(fileUrl);
        if (objectName != null) {
            BlobId blobId = BlobId.of(bucketName, objectName);
            return storage.delete(blobId);
        }
        return false;
    }

    //버킷네임 뒷부분 파일이름 추출
    private String extractObjectNameFromUrl(String fileUrl) {
        int startIndex = fileUrl.indexOf(bucketName) + bucketName.length() + 1;
        return fileUrl.substring(startIndex);
    }
    
    //이미지 리사이징 메서드
    private MultipartFile resizeImage(MultipartFile file, int width, int height) throws IOException {
        // 이미지 리사이징
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        Thumbnails.of(file.getInputStream())
                .size(width, height)
                .toOutputStream(baos);

        // 리사이즈된 이미지를 byte array로 변환
        byte[] resizedImageBytes = baos.toByteArray();


        return new ByteArrayMultipartFile(file.getName(), file.getOriginalFilename(), file.getContentType(), resizedImageBytes);
    }
}


