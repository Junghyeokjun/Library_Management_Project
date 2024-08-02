package com.project.library_management.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.library_management.dto.BookDto;
import com.project.library_management.dto.LoanDto;
import com.project.library_management.dto.SearchDto;

@RestController
@RequestMapping("/api")
public class ApiController {

	@GetMapping("/test/{category}")
	public String test(@PathVariable("category") String category) {
		return category;
	}

	// GET: /api/book?id=
	// 도서번호에 해당하는 도서 정보 반환
	@GetMapping("/book")
	public BookDto getBook(@RequestParam long id) {
		System.out.println(id);
		BookDto book = new BookDto();
		book.setTitle("테스트용");
		book.setAuthor("테스트저자");
		book.setPublisher("테스트출판");
		book.setBookId(1);
		book.setPublishedDate(LocalDate.now());
		book.setAvailableCopies(3);
		book.setTotalCopies(3);
		book.setBookIntro("책소개입니다 테스트용으로");
		book.setAuthorIntro("저자입니다 테스트용으로");
		book.setTableOfContents("목차입니다 테스트용으로");

		return book;
	}
	
	// POST: /api/book
	// 해당 도서정보를 DB에 저장
	@PostMapping("/book")
	public String createBook(@RequestBody BookDto book) {
		System.out.println(book);
		System.out.println("createBook");

		return "POST_BOOK_SUCCESS";
	}

	// PUT: /api/book
	// 해당 도서정보를 DB에서 수정
	@PutMapping("/book")
	public String updateBook(@RequestBody BookDto book) {

		System.out.println(book);
		System.out.println("updateBook");

		return "PUT_BOOK_SUCCESS";
	}
	
	// DELETE: /api/book?id=
	// 해당 도서정보를 DB에서 수정
	@DeleteMapping("/book")
	public String deleteBook(@RequestParam long id) {

		System.out.println(id);
		System.out.println("deleteBook");

		return "DELETE_BOOK_SUCCESS";
	}
	
	// GET: /api/booklist?category= & keyword= & option= & page=
	// 해당 조건에 맞는 도서 정보 리스트 반환
	@GetMapping("/booklist")
	public Map<String, Object> getBookList(@ModelAttribute SearchDto search) {
		System.out.println(search);
		
		Map<String, Object> data=new HashMap<String, Object>();
		
		BookDto book ;
		List<BookDto> books=new ArrayList<BookDto>();
		for (int i = 0; i < 5; i++) {
			book= new BookDto();
			book.setTitle("테스트용"+i);
			book.setAuthor("테스트저자"+i);
			book.setPublisher("테스트출판"+i);
			book.setBookId(1);
			book.setPublishedDate(LocalDate.now());
			book.setAvailableCopies(3);
			book.setTotalCopies(3);
			book.setBookIntro("책소개입니다 테스트용으로"+i);
			book.setAuthorIntro("저자입니다 테스트용으로"+i);
			book.setTableOfContents("목차입니다 테스트용으로"+i);
			books.add(book);
		}
		
		data.put("bookList", books);
		data.put("pageCount",5);
		
		return data;
	}
	
	// POST: /api/loan
		// 해당 대출정보를 DB에 저장
		@PostMapping("/loan")
		public String createLoan(@RequestBody LoanDto loan) {

			System.out.println("createLoan");
			System.out.println(loan);
			
			return "POST_LOAN_SUCCESS";
		}

		// PUT: /api/loan
		// 해당 대출정보를 DB에서 수정
		@PutMapping("/loan")
		public String updateLoan(@RequestBody long id) {

			System.out.println("updateLoan");
			System.out.println(id);

			return "PUT_LOAN_SUCCESS";
		}
		
		// GET: /api/loanlist?id= & page= & paging= & returned= 
		// 해당 조건에 맞는 도서 정보 리스트 반환
		@GetMapping("/loanlist")
		public List<LoanDto> getloanList(@ModelAttribute SearchDto search) {
			System.out.println(search);
			LoanDto loan ;
			List<LoanDto> loans=new ArrayList<LoanDto>();
			for (int i = 0; i < 5; i++) {
				loan= new LoanDto();
				loan.setLoanId(i);
				loan.setUserId(i);
				loan.setBookId(i);
				loan.setLoanDate(LocalDate.now());
				loan.setReturnDate(LocalDate.now());
				loan.setOverDue('n');
				loan.setTitle("testtitle"+i);
				loan.setAuthor("test"+i);
			
			}

			return loans;
		}
}
