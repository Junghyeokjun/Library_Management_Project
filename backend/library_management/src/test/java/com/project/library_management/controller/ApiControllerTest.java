package com.project.library_management.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
class ApiControllerTest {

	@Autowired
	MockMvc mock;

	final static String api = "/api/";

	@Disabled
	@Test
	// 도서정보 반환 엔드포인트 테스트
	void getBookTest() throws Exception {
		mock.perform(MockMvcRequestBuilders.get(api+"/book?id=1"))
			.andExpect(MockMvcResultMatchers.status().isOk())
			.andDo(print());
	}
	
	@Disabled
	@Test
	//도서정보 저장 엔드포인트  테스트
	void createBookTest() throws Exception{
		mock.perform(MockMvcRequestBuilders
				.post(api+"/book")
				.contentType(MediaType.APPLICATION_FORM_URLENCODED)
				.param("bookId", "0")
	            .param("title", "test")
	            .param("author", "test")
	            .param("publisher", "test")
	            .param("publishedDate", "2001-12-18")
	            .param("isbn", "1222")
	            .param("totalCopies", "3")
	            .param("bookIntro", "test")
	            .param("authorIntro", "test")
	            .param("tableOfContents", "test")
	            .param("category", "1"))
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andDo(print());
	}
	
	@Disabled
	@Test
	//도서정보 수정 엔드포인트 테스트
	void updateBookTest() throws Exception{
		mock.perform(MockMvcRequestBuilders
				.put(api+"/book")
				.contentType(MediaType.APPLICATION_FORM_URLENCODED)
				.param("bookId", "1")
	            .param("title", "test")
	            .param("author", "test")
	            .param("publisher", "test")
	            .param("publishedDate", "2001-12-18")
	            .param("isbn", "1222")
	            .param("totalCopies", "3")
	            .param("bookIntro", "test")
	            .param("authorIntro", "test")
	            .param("tableOfContents", "test")
	            .param("category", "1"))
		.andExpect(MockMvcResultMatchers.status().isOk())
		.andDo(print());
	}
	
	@Disabled
	@Test
	//도서정보 삭제 엔드포인트 테스트
	void deleteBookTest() throws Exception{
		mock.perform(MockMvcRequestBuilders.delete(api+"/book?id=1"))
		.andExpect(MockMvcResultMatchers.status().is5xxServerError())//책을 대여한 사용자가 있어 삭제가 불가능해야함
		.andDo(print());
	}
	
	@Disabled
	@Test
	// 도서정보 리스트 반환 엔드포인트 테스트
	void getBookListTest() throws Exception {
		mock.perform(MockMvcRequestBuilders
				.get(api+"/booklist")
				.param("category","0")
				.param("keyword", "")
				.param("option", "")
				.param("page", "1"))
			.andExpect(MockMvcResultMatchers.status().isOk())
			.andDo(print());
	}	
	
	@Disabled
	@Test
	// 대출여부 반환 엔드포인트 테스트
	void getLoanTest() throws Exception {
		mock.perform(MockMvcRequestBuilders
				.get(api+"/loan")
				.param("bookid","1")
				.param("userid", "1"))
			.andExpect(MockMvcResultMatchers.status().isOk())
			.andDo(print());
	}	
	
	@Disabled
	@Test
	// 대출정보 삽입 엔드포인트 테스트
	void createLoanTest() throws Exception {
		mock.perform(MockMvcRequestBuilders
				.post(api+"/loan")
				.contentType(MediaType.APPLICATION_JSON)
				.content( "{\"userId\":\"2\","
						+ "\"bookId\":\"1\"}"))
			.andExpect(MockMvcResultMatchers.status().isOk())
			.andDo(print());
	}	
	
	@Disabled
	@Test
	// 대출정보 수정 엔드포인트 테스트
	void updateLoanTest() throws Exception {
		mock.perform(MockMvcRequestBuilders
				.put(api+"/loan")
				.contentType(MediaType.APPLICATION_JSON)
				.content( "{\"loanId\":\"1\","
						+ "\"bookId\":\"1\"}"))
			.andExpect(MockMvcResultMatchers.status().isOk())
			.andDo(print());
	}	
	
	@Disabled
	@Test
	// 대출정보 리스트 반환 엔드포인트 테스트
	void getloanListTest() throws Exception {
		mock.perform(MockMvcRequestBuilders
				.get(api+"/loanlist")
				.param("page","1")
				.param("returned", "false"))
			.andExpect(MockMvcResultMatchers.status().isOk())
			.andDo(print());
	}
	
	@Disabled
	@Test
	// 유저정보 반환 엔드포인트 테스트
	void getUserTest() throws Exception {
		mock.perform(MockMvcRequestBuilders
				.get(api+"/user")
				.param("id","1"))
			.andExpect(MockMvcResultMatchers.status().isOk())
			.andDo(print());
	}	
	
	@Disabled
	@Test
	// 유저정보 저장 엔드포인트 테스트
	void createUserTest() throws Exception {
		mock.perform(MockMvcRequestBuilders
				.post(api+"/user")
				.contentType(MediaType.APPLICATION_JSON)
				.content( "{\"email\":\"test@testtest\","
						+ "\"password\": \"testet\","
						+ "\"userName\":\"testtest\"}"))
			.andExpect(MockMvcResultMatchers.status().isOk())
			.andDo(print());
	}	
	
	@Disabled
	@Test
	void putUserEmailTest() throws Exception{
		mock.perform(MockMvcRequestBuilders
				.put(api+"/user")
				.contentType(MediaType.APPLICATION_JSON)
				.content( "{\"email\":\"test@testtest\","
						+ "\"userId\": \"7\","
						+ "\"option\":\"email\"}"))
			.andExpect(MockMvcResultMatchers.status().isOk())
			.andDo(print());
	}
	
	@Disabled
	@Test
	//유저정보 수정 엔드포인트 테스트
	void deleteUserEmailTest() throws Exception{
		mock.perform(MockMvcRequestBuilders
				.delete(api+"/user")
				.param("id", "7"))
			.andExpect(MockMvcResultMatchers.status().is5xxServerError())//대여한 도서가 있으므로 삭제 불가
			.andDo(print());
	}

	@Disabled
	@Test
	//유저정보 삭제 엔드포인트 테스트
	// 유저정보 리스트 반환 엔드포인트 테스트
	void getUserListTest() throws Exception {
		mock.perform(MockMvcRequestBuilders
				.get(api+"/userlist")
				.param("page","1")
				.param("paging", "20"))
			.andExpect(MockMvcResultMatchers.status().isOk())
			.andDo(print());
	}	
	
	
}
