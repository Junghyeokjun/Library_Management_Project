package com.project.library_management.mapper;

import static org.junit.Assert.assertNotNull;

import java.sql.Date;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.project.library_management.dto.BookDto;
import com.project.library_management.dto.SearchDto;
import com.project.library_management.entity.Book;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
class BookMapperTest {

	@Autowired
	BookMapper bookMapper;

	@Disabled
	@Test
	//도서 정보 리스트 획득 테스트
	public void selectBooksTest() {
		assertNotNull(bookMapper);
		SearchDto search=new SearchDto();
		search.setPaging(2);
		search.setPage(2);
		System.out.println(search);
		for (Book book : bookMapper.selectBooks(search)) {
			System.out.println(book.getTitle());
		}
		
	}
	
	@Disabled
	@Test
	//도서 정보 획득 테스트
	public void selectBookTest() {
	
		System.out.println(bookMapper.selectBook(3).getTitle());
	}

	@Disabled
	@Test
	//조건에 맞는 도서 총 개수 획득 메서드
	public void selectBookCount() {
		SearchDto search=new SearchDto();
		System.out.println(bookMapper.selectBookCount(search));
	}
	
	
	@Disabled
	@Test
	@Transactional
	//도서정보 삽입 테스트
	public void insertBookTest() {
		BookDto book=new BookDto();
		book.setTitle("핵의 역사");
		book.setAuthor("히틀러");
		book.setPublishedDate(new Date((new java.util.Date()).getTime()));
		book.setIsbn("12314");
		book.setTotalCopies(4);
		book.setImagePath("sssss");
		book.setPublisher("set");
		book.setBookIntro("책소개");
		book.setAuthorIntro("저가");
		book.setTableOfContents("나다");
		bookMapper.insertBook(book);
		bookMapper.insertBookDetails(book);
		System.out.println(book.getBookId());
	}
	
	@Disabled
	@Test
	//도서정보 수정 테스트
	public void updateBookTest() {
		BookDto book=new BookDto();
		book.setBookId(15);
		book.setTitle("핵의 역사");
		book.setAuthor("작자미상");
		book.setPublishedDate(new Date((new java.util.Date()).getTime()));
		book.setIsbn("12314");
		book.setTotalCopies(4);
		book.setImagePath("sssss");
		book.setPublisher("set");
		book.setBookIntro("책소개");
		book.setAuthorIntro("저가");
		book.setTableOfContents("나다");
		
		System.out.println(bookMapper.updateBook(book)+"");
	}
	
	@Disabled
	@Test
	//도서정보 삭제 테스트
	public void deleteBookTest() {
		System.out.println(bookMapper.deleteBook(15));
	}

}
