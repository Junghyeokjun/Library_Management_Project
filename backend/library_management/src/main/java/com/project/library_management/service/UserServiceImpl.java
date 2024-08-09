package com.project.library_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.library_management.dto.SearchDto;
import com.project.library_management.dto.UserDto;
import com.project.library_management.mapper.UserMapper;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserMapper userMapper;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public UserDto getUser(long id) {
		UserDto user=new UserDto();
		user.setUser(userMapper.selectUser(id));
		user.setPassword("password");//보안을 위해 클라이언트에 해당정보는 전송하지 않습니다.
		return user;
	}

	@Transactional
	@Override
	public boolean createUser(UserDto user) throws Exception {
		
		//0이 아닐경우 중복이메일
		if(userMapper.checkEmail(user.getEmail())!=0) {
			throw new Exception("중복된 이메일입니다.");
		}
		
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		
		//데이터베이스에 성공적으로 추가됬을시 반환값은 1
		int result= userMapper.insertUser(user);
		
		System.out.println(result);
		
		return result==1;
	}

	@Override
	public int updateUser(UserDto user) throws Exception {
		
		String option=user.getOption();
		//0이 아닐경우 중복이메일
		if(option.equals("email")) {
			if(userMapper.checkEmail(user.getEmail())!=0) {
				throw new Exception("중복된 이메일입니다.");
			}
		}else if(option.equals("password")) {
			user.setPassword(passwordEncoder.encode(user.getPassword()));
		}
		
		return userMapper.updateUser(user);
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
