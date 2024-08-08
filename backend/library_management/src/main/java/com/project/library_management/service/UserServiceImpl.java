package com.project.library_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.library_management.dto.SearchDto;
import com.project.library_management.dto.UserDto;
import com.project.library_management.mapper.UserMapper;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserMapper userMapper;
	
	@Override
	public UserDto getUser(long id) {
		UserDto user=new UserDto();
		user.setUser(userMapper.selectUser(id));
		return user;
	}

	@Transactional
	@Override
	public boolean createUser(UserDto user) {
		
		//0이 아닐경우 중복이메일
		if(userMapper.checkEmail(user.getEmail())!=0) {
			return false;
		}
		//데이터베이스에 성공적으로 추가됬을시 반환값은 1
		int result= userMapper.insertUser(user);
		
		System.out.println(result);
		
		return result==1;
	}
	
	@Transactional
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
