package com.project.library_management.dto;

import java.sql.Timestamp;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

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
	@NotBlank(message = "이름이 입력되지 않았습니다.")
	private String userName;

	//유저의 비밀번호 입니다.
	@NotBlank(message = "패스워드가 입력되지 않았습니다.")
    @Size(min = 6, message = "패스워드는 6자리 이상으로 입력해주세요.")
	private String password;
	
	
	//유저의 이메일 입니다.
    @NotBlank(message = "이메일이 입력되지 않았습니다.")
    @Email(message = "이메일의 형식에 맞춰주세요")
	private String email;
	
	//유저의 권한입니다.
	private String role;
	
	//유저의 가입일자입니다.
	private Timestamp createdAt;
	
	//유저 정보를 마지막으로 수정한 날짜입니다.
	private Timestamp updatedAt;
	
	//유저의 대출권수입니다.
	private long loanCount;
	
	//유저의 정보를 업데이트 할때 쓰이는 옵션입니다. 유저와는 논리적으로 관계가 없습니다.
	private String option;
	
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
