package com.project.library_management.service;

import java.util.List;

import com.project.library_management.dto.BookDto;
import com.project.library_management.dto.SearchDto;

public interface BookService {
	
	//해당 id에 해당하는 도서정보를 반환하는 메서드
	public BookDto getBook(long id);
	
	//해당 도서정보를 DB에 저장하는 메서드
	public int createBook(BookDto book);
	
	//해당 도서정보를 DB에서 수정하는 메서드
	public int updateBook(BookDto book);
	
	//해당 id에 해당하는 도서를 DB에서 삭제하는 메서드
	public int deleteBook(long id);
	
	//해당 조건에 맞는 도서정보 리스트를 반환하는 메서드
	public List<BookDto> getBooks(SearchDto search);
	
	//해당 조건에 맞는 도서정보의 개수를 반환하는 메서드
	public long getBookCount(SearchDto search);
}
