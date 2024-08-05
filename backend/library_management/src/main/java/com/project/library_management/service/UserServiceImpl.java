package com.project.library_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.library_management.dto.SearchDto;
import com.project.library_management.dto.UserDto;
import com.project.library_management.mapper.UserMapper;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserMapper userMapper;
	
	@Override
	public UserDto getUser(long id) {
		UserDto user=new UserDto();
		user.setUser(userMapper.selectUser(id));
		return user;
	}

	@Override
	public int deleteUser(long id) {
		return userMapper.deleteUser(id);
	}

	@Override
	public List<UserDto> getUsers(SearchDto search) {
		return userMapper.selectUsers(search);
	}

	@Override
	public long getUserCount() {
		return userMapper.selectUserCount();
	}

}
