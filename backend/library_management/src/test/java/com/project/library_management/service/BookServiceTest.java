package com.project.library_management.service;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.project.library_management.dto.BookDto;
import com.project.library_management.dto.SearchDto;


@SpringBootTest
class BookServiceTest {
	
	@Autowired
	BookService bookService;

	@Disabled
	@Test
	//도서정보 획득 로직 테스트
	void getBookTest() {
		System.out.println(bookService.getBook(3));
	}
	
	@Disabled
	@Test
	@Transactional
	//도서정보 삽입 로직 테스트
	void createBookTest() {
		BookDto book= bookService.getBook(3);
		book.setIsbn("12");//해당 값은 UNIQUE이므로 테스트 할때마다 수정
		book.setPublisher("test");
		System.out.println(bookService.createBook(book));
	}
	
	@Disabled
	@Test
	@Transactional
	//도서정보 수정 로직 테스트
	void updateBookTest() {
		BookDto book= bookService.getBook(1);
		book.setIsbn("13");//해당 값은 UNIQUE이므로 테스트 할때마다 수정
		book.setPublisher("test");
		System.out.println(bookService.updateBook(book));
	}
	
	@Disabled
	@Test
	@Transactional
	//도서정보 삭제 로직 테스트
	void deleteBookTest() {
		System.out.println(bookService.deleteBook(3));//db참조하여 수정하여 테스트
	}
	
	@Disabled
	@Test
	//조건에 맞는 도서정보 리스트 획득 테스트
	void getBooksTest() {
		for (BookDto book : bookService.getBooks(new SearchDto())) {
			System.out.println(book);
		}
	}
	
	@Disabled
	@Test
	//조건에 맞는 도서의 개수 획득 테스트
	void getBookCountTest(){
		System.out.println(bookService.getBookCount(new SearchDto()));
	}
	
	
	

}
