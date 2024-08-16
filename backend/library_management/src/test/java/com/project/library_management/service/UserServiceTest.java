package com.project.library_management.service;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.project.library_management.dto.SearchDto;
import com.project.library_management.dto.UserDto;


@SpringBootTest
class UserServiceTest {
	
	@Autowired
	UserService userService;
	
	@Disabled
	@Test
	//유저의 정보를 반환하는 로직 테스트
	void getUserTest() {
		System.out.println(userService.getUser(1));
	}
	
	@Disabled
	@Test
	@Transactional
	//유저의 정보를 추가하는 로직 테스트
	void createUserTest() {
		UserDto user=userService.getUser(1);
		user.setEmail("test@testst");
		user.setUserName("testet");
		try {
			System.out.println(userService.createUser(user));
		} catch (Exception e) {
			System.out.println("동일유저 존재");
		}
	}
	
	@Disabled
	@Test
	@Transactional
	//유저의 정보를 수정하는 로직 테스트
	void updateUserTest() {
		UserDto user=userService.getUser(1);
		user.setEmail("test@teststs");
		user.setOption("email");
		try {
			System.out.println(userService.updateUser(user));
		} catch (Exception e) {
			System.out.println("업데이트 실패");
		}
	}
	
	@Disabled
	@Test
	@Transactional
	//유저의 정보를 삭제하는 로직 테스트
	void deletUserTest() {
		System.out.println(userService.deleteUser(2));
	}
	
	@Disabled
	@Test
	//조건을 충족하는 유저 정보 리스트를 반환하는 로직 테스트
	void getUsersTest() {
		for (UserDto user : userService.getUsers(new SearchDto())) {
			System.out.println(user);
		}
	}
	
	@Disabled
	@Test
	//조건을 충족하는 유저정보 리스트를 반환하는 로직 테스트
	//(유저 검색의 필요성을 느끼지 못하여 파라미터 x)
	void getUserCount() {
		System.out.println(userService.getUserCount());
	}
}
