package com.project.library_management.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.project.library_management.dto.SearchDto;
import com.project.library_management.dto.UserDto;
import com.project.library_management.entity.User;

@Mapper
public interface UserMapper {

	//user_id를 이용하여 특정 유저의 정보를 얻어오는 메서드
	public User selectUser(long id);
	
	//유저정보의 list를 얻어오는 메서드
	public List<UserDto> selectUsers(SearchDto search);
	
	//유저의 총인원을 얻어오는 메서드
	public long selectUserCount();
	
	//유저정보를 데이터베이스에 추가하는 메서드
	public int insertUser(UserDto user);
	
	//해당 유저의 비밀번호를 수정하는 메서드
	public int updateUser(UserDto user);
	
	//user_id를 이용하여 특정 유저의 정보를 삭제하는 메서드
	public int deleteUser(long id);
	
	//스프링 시큐리티로 유저를 인증하기 위하여 만든 메서드
	//email을 이용해서 유저정보를 얻어오는 메서드
	public User selectAuthUser(String email);
	
	//해당 이메일이 DB에 존재하는지 확인하는 메서드
	public int checkEmail(String email);

	
}
