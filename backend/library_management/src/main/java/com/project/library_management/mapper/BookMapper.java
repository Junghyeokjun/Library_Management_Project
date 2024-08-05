package com.project.library_management.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.project.library_management.dto.BookDto;
import com.project.library_management.dto.SearchDto;
import com.project.library_management.entity.Book;

@Mapper
public interface BookMapper {

	//book_id를 이용해 bookentity를 얻어오는 메서드입니다.
	public Book selectBook(long id);
	
	//SearchDto를 이용해 bookentity list를 얻어오는 메서드입니다.
	public List<Book> selectBooks(SearchDto search);
	
	//searchDto의 조건에 맞는 bookentity가 몇개인지 얻어오는 메서드입니다.
	public long selectBookCount(SearchDto search);
	
	//BookDto를 이용해 테이블에 도서를 추가하는 메서드
	public int insertBook(BookDto book);
	
	//BookDto를 이용하여 테이블에 도서의 상세정보를 추가하는 메서드
	public int insertBookDetails(BookDto book);
	
	//BookDto를 이용해 테이블의 도서를 수정하는 메서드
	public int updateBook(BookDto book);
	
	//BookDto를 이용해 테이블의 도서의 상세정보를 업데이트하는 메서드
	public int updateBookDetails(BookDto book);
	
	//book_id를 이용해 테이블의 도서를 삭제하는 메서드
	public int deleteBook(long id);
}
