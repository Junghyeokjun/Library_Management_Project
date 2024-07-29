package com.project.library_management.entity;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

//이름         널?       유형            
//---------- -------- ------------- 
//USER_ID    NOT NULL NUMBER        
//USERNAME   NOT NULL VARCHAR2(50)  
//PASSWORD   NOT NULL VARCHAR2(255) 
//EMAIL      NOT NULL VARCHAR2(100) 
//ROLE                VARCHAR2(20)  
//CREATED_AT          TIMESTAMP(6)  
//UPDATED_AT          TIMESTAMP(6)

//유저를 나타내는 엔티티 클래스입니다.
//이 클래스는 users와 매핑됩니다.
@AllArgsConstructor
@Setter
@Getter
public class User {
	
	//각 유저를 식별하는 ID입니다.
	private long userId;
	
	//유저의 아이디입니다.
	private String userName;

	//유저의 비밀번호 입니다.
	private String password;
	
	//유저의 이메일 입니다.
	private String email;
	
	//유저의 권한입니다.
	private String role;
	
	//유저의 가입일자입니다.
	private LocalDateTime createdAt;
	
	//유저 정보를 마지막으로 수정한 날짜입니다.
	private LocalDateTime updatedAt;
}
