package com.project.library_management.service;

import java.util.List;

import com.project.library_management.dto.SearchDto;
import com.project.library_management.dto.UserDto;

public interface UserService {

	//해당 id를 가진 유저의 정보를 반환하는 메서드
	public UserDto getUser(long id);
	
	//해당 id를 가진 유저의 정보를 삭제하는 메서드
	public int deleteUser(long id);
	
	//해당 조건에 부합하는 유저 정보 리스트를 반환하는 메서드
	public List<UserDto> getUsers(SearchDto search);
	
	//해당 조건에 부합하는 유저의 총수를 반환하는 메서드
	public long getUserCount();
	
}
