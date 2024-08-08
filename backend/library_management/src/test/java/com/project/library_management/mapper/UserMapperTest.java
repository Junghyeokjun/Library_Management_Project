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
	void selectUserTest() {
		System.out.println(userMapper.selectUser(1).getUserName());
	}

	@Disabled
	@Test
	void selectUsersTest() {
		SearchDto search=new SearchDto();
		search.setPaging(2);
		for (UserDto user : userMapper.selectUsers(search)) {
			System.out.println(user.getUserName());
		}
	}

	@Disabled
	@Test
	void selectUserCountTest() {
		System.out.println(userMapper.selectUserCount());
	}

	@Disabled
	@Test
	void insertUserTest() {
		UserDto user=new UserDto();
		user.setUserName("test");
		user.setEmail("test@test");
		user.setPassword("1234");
		
		System.out.println(userMapper.insertUser(user));
	}
	
	@Disabled
	@Test
	void deleteUserTest() {
		System.out.println(userMapper.deleteUser(4));
	}
	
	@Disabled
	@Test
	void selectAuthuserTest() {
		System.out.println(userMapper.selectAuthUser("john.doe@example.com"));
	}

	@Disabled
	@Test
	void checkEmailTest() {
		System.out.println(userMapper.checkEmail("test@test"));
	}
}
