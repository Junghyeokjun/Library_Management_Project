package com.project.library_management.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.library_management.dto.BookDto;
import com.project.library_management.dto.SearchDto;
import com.project.library_management.entity.Book;
import com.project.library_management.mapper.BookMapper;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookMapper bookMapper;
	
	@Override
	public BookDto getBook(long id) {
		BookDto book = new BookDto();
		book.setBook(bookMapper.selectBook(id));
		book.setCategory(bookMapper.selectCategory(id).getCategoryId());

		return book;
	}

	@Transactional
	@Override
	public int createBook(BookDto book) {

		bookMapper.insertBook(book);
		bookMapper.insertBookDetails(book);
		
		return bookMapper.insertBookCategory(book);
	}

	@Transactional
	@Override
	public int updateBook(BookDto book) {
		
		bookMapper.updateBook(book);
		bookMapper.updateBookDetails(book);
		bookMapper.updateBookCategory(book);
		
		return bookMapper.updateBookDetails(book);
	}

	@Transactional
	@Override
	public int deleteBook(long id) {
		
		return bookMapper.deleteBook(id);
	}

	@Override
	public List<BookDto> getBooks(SearchDto search) {
		
		List<BookDto> books=new ArrayList<BookDto>();
		
		for (Book book : bookMapper.selectBooks(search)) {
			books.add(new BookDto(book));
		}
		
		return books;
	}

	@Override
	public long getBookCount(SearchDto search) {
		return bookMapper.selectBookCount(search);
	}

}
