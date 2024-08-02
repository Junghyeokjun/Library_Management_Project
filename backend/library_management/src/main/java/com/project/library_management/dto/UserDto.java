package com.project.library_management.dto;

import java.time.LocalDateTime;

import com.project.library_management.entity.User;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

//유저에 관련된 정보를 관리하는 Dto클래스입니다.
//이 클래스는 User 엔티티와 매핑됩니다.

@Getter
@Setter
@ToString
public class UserDto {
	//각 유저를 식별하는 ID입니다.
	private long userId;
	
	//유저의 이름입니다.
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
	
	//User 엔티티를 이용해 데이터를 입력하는 세터함수입니다.
	public void setUser(User user) {
		this.setUserId(user.getUserId());
		this.setUserName(user.getUserName());
		this.setPassword(user.getPassword());
		this.setEmail(user.getEmail());
		this.setRole(user.getRole());
		this.setCreatedAt(user.getCreatedAt());
		this.setUpdatedAt(user.getUpdatedAt());
	}
}
