package com.project.library_management.mapper;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.project.library_management.dto.SearchDto;
import com.project.library_management.dto.UserDto;

@SpringBootTest
class UserMapperTest {

	@Autowired
	private UserMapper userMapper;
	
	@Disabled
	@Test
	//유저정보 획득 테스트
	void selectUserTest() {
		System.out.println(userMapper.selectUser(1).getUserName());
	}

	@Disabled
	@Test
	//유저정보 리스트 획득 테스트
	void selectUsersTest() {
		SearchDto search=new SearchDto();
		search.setPaging(2);
		for (UserDto user : userMapper.selectUsers(search)) {
			System.out.println(user.getUserName());
		}
	}

	@Disabled
	@Test
	//유저 총 인수 획득 테스트
	void selectUserCountTest() {
		System.out.println(userMapper.selectUserCount());
	}

	@Disabled
	@Test
	//유저정보 삽입 테스트
	void insertUserTest() {
		UserDto user=new UserDto();
		user.setUserName("test");
		user.setEmail("test@test");
		user.setPassword("1234");
		
		System.out.println(userMapper.insertUser(user));
	}
	
	@Disabled
	@Test
	//유저정보 삭제 테스트
	void deleteUserTest() {
		System.out.println(userMapper.deleteUser(4));
	}
	
	@Disabled
	@Test
	//유저 권한 획득 테스트
	void selectAuthuserTest() {
		System.out.println(userMapper.selectAuthUser("john.doe@example.com"));
	}

	@Disabled
	@Test
	//유저 중복 여부 획득 테스트
	void checkEmailTest() {
		System.out.println(userMapper.checkEmail("test@test"));
	}
}
