package com.project.library_management.controller;

import java.sql.Date;
import java.sql.Timestamp;
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
import com.project.library_management.dto.UserDto;

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
		book.setPublishedDate(Date.valueOf(LocalDate.now()));
		book.setCategory(3);
		book.setAvailableCopies(3);
		book.setIsbn("1234");
		book.setTotalCopies(3);
		book.setImagePath("https://www.google.com/logos/doodles/2024/paris-games-sailing-6753651837110529.4-law.gif");
		book.setBookIntro("책소개입니다 테스트용으로");
		book.setAuthorIntro("저자입니다 테스트용으로");
		book.setTableOfContents("목차입니다 테스트용으로");

		return book;
	}

	// POST: /api/book
	// 해당 도서정보를 DB에 저장
	@PostMapping("/book")
	public String createBook(@ModelAttribute BookDto book) {
		System.out.println(book);
		System.out.println("createBook");

		return "POST_BOOK_SUCCESS";
	}

	// PUT: /api/book
	// 해당 도서정보를 DB에서 수정
	@PutMapping("/book")
	public String updateBook(@ModelAttribute BookDto book) {

		System.out.println(book);
		System.out.println("updateBook");

		return "PUT_BOOK_SUCCESS";
	}

	// DELETE: /api/book?id=
	// 해당 도서정보를 DB에서 삭제
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

		Map<String, Object> booksData = new HashMap<String, Object>();

		BookDto book;
		List<BookDto> books = new ArrayList<BookDto>();
		for (int i = 0; i < 5; i++) {
			book = new BookDto();
			book.setTitle("테스트용" + i);
			book.setAuthor("테스트저자" + i);
			book.setPublisher("테스트출판" + i);
			book.setBookId(i);
			book.setPublishedDate(Date.valueOf(LocalDate.now()));
			book.setAvailableCopies(3);
			book.setTotalCopies(3);
			book.setImagePath(
					"https://www.google.com/logos/doodles/2024/paris-games-sailing-6753651837110529.4-law.gif");
			book.setBookIntro("책소개입니다 테스트용으로" + i);
			book.setAuthorIntro("저자입니다 테스트용으로" + i);
			book.setTableOfContents("목차입니다 테스트용으로" + i);
			books.add(book);
		}

		booksData.put("bookList", books);
		booksData.put("pageCount", 13);

		return booksData;
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
	public Map<String, Object> getloanList(@ModelAttribute SearchDto search) {
		System.out.println(search);
		LoanDto loan;

		Map<String, Object> loansData = new HashMap<String, Object>();

		List<LoanDto> loans = new ArrayList<LoanDto>();
		for (int i = 0; i < search.getPaging(); i++) {
			loan = new LoanDto();
			loan.setLoanId(i);
			loan.setUserId(i);
			loan.setBookId(i);
			loan.setLoanDate(new Timestamp(System.currentTimeMillis()));
			loan.setReturnDate(new Timestamp(System.currentTimeMillis()));
			loan.setOverDue('n');
			loan.setTitle("testtitle" + i);
			loan.setImagePath(
					"https://www.google.com/logos/doodles/2024/paris-games-sailing-6753651837110529.4-law.gif");
			loan.setAuthor("test" + i);
			loans.add(loan);
		}

		loansData.put("loanList", loans);
		loansData.put("pageCount", 4);

		return loansData;
	}

	// GET: /api/user?id=
	// 해당 조건에 해당하는 유저 정보 반환
	@GetMapping("/user")
	public UserDto getUser(@RequestParam long id) {
		System.out.println(id);
		UserDto user = new UserDto();
		user.setUserName("테스트");
		user.setEmail("이메일");
		user.setPassword("sss");

		return user;
	}

	// DELETE: /api/user?id=
	// 해당 조건에 해당하는 유저 정보 삭제
	@DeleteMapping("/user")
	public String deleteUser(@RequestParam long id) {
		System.out.println(id);

		return "DELETE_USER_SUCCESS";
	}

	// GET: /api/userlist?page=&paging=
	// 해당 조건에 해당하는 유저 정보 리스트 반환
	@GetMapping("/userlist")
	public Map<String, Object> getUserList(@ModelAttribute SearchDto search) {
		System.out.println(search);
		UserDto user;

		Map<String, Object> usersData = new HashMap<String, Object>();

		List<UserDto> users = new ArrayList<UserDto>();
		for (int i = 0; i < search.getPaging(); i++) {
			user = new UserDto();
			user.setUserId(i);
			user.setUserName("테스트" + i);
			user.setEmail("이메일" + i);
			user.setLoanCount(i);
			user.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
			users.add(user);
		}

		usersData.put("userList", users);
		usersData.put("pageCount", 4);

		return usersData;
	}
}
