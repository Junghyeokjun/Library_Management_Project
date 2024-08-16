package com.project.library_management.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.library_management.constant.ResponseMesaages;
import com.project.library_management.dto.BookDto;
import com.project.library_management.dto.LoanDto;
import com.project.library_management.dto.SearchDto;
import com.project.library_management.dto.UserDto;
import com.project.library_management.service.BookService;
import com.project.library_management.service.GoogleCloudStorageService;
import com.project.library_management.service.LoanService;
import com.project.library_management.service.UserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api")
@Slf4j
public class ApiController {

	@Autowired
	private GoogleCloudStorageService cloudService;

	@Autowired
	private BookService bookService;
	
	@Autowired
	private LoanService loanService;
	
	@Autowired
	private UserService userService;
	
	// GET: /api/book?id=
	// 도서번호에 해당하는 도서 정보 반환
	@GetMapping("/book")
	public ResponseEntity<BookDto>  getBook(@RequestParam long id) {
		System.out.println(id);
		return ResponseEntity.ok(bookService.getBook(id));
	}

	// POST: /api/book
	// 해당 도서정보를 DB에 저장
	@PostMapping("/book")
	public ResponseEntity<String>  createBook(@Validated @ModelAttribute BookDto book,BindingResult result) {
		
		if (result.hasErrors()) {
			if(book.getTotalCopies()==0) {
		        return ResponseEntity.badRequest().body("도서는 0권 이상 존재해야 합니다.");
			}else if(book.getCategory()==0) {
		        return ResponseEntity.badRequest().body("카테고리가 선택되지 않았습니다.");
			}
			System.out.println(result.getAllErrors().get(0).getDefaultMessage());
	        return ResponseEntity.badRequest().body(result.getAllErrors().get(0).getDefaultMessage());
	    }
		
		try {
			//이미지 클라우드에 업로드후 해당 경로 set
			book.setImagePath(cloudService.uploadFile(book.getImage()));
			
			//반환값이 0일경우 추가된게 없다는 뜻이므로
			if(bookService.createBook(book)==0) {
				return ResponseEntity.ok(ResponseMesaages.FAILURE);
			};
		} catch (Exception e) {
			return ResponseEntity.status(500).body(ResponseMesaages.ERROR);
		}

		return ResponseEntity.ok(ResponseMesaages.SUCCESS);
	}

	// PUT: /api/book
	// 해당 도서정보를 DB에서 수정
	@PutMapping("/book")
	public ResponseEntity<String> updateBook(@ModelAttribute BookDto book) {

		System.out.println(book);
		
		try {
			//이미지 파일이 존재하지 않을경우 기존경로 사용
			//이미지 파일이 존재할경우 기존파일 삭제후 변경파일 업로드
			if(book.getImage()!=null) {
				cloudService.deleteFileFromUrl(bookService.getBook(book.getBookId()).getImagePath());
				book.setImagePath(cloudService.uploadFile(book.getImage()));
			}else {
				book.setImagePath(bookService.getBook(book.getBookId()).getImagePath());
			}
			
			//반환값이 0일경우 변경된게 없다는 뜻이므로
			if(bookService.updateBook(book)==0) {
				return ResponseEntity.ok(ResponseMesaages.FAILURE);
			};
		} catch (Exception e) {
			return ResponseEntity. status(500).body(ResponseMesaages.ERROR);
		}

		return ResponseEntity.ok(ResponseMesaages.SUCCESS);

	}

	// DELETE: /api/book?id=
	// 해당 도서정보를 DB에서 삭제
	@DeleteMapping("/book")
	public ResponseEntity<String> deleteBook(@RequestParam long id) {
		
		try {
			BookDto book=bookService.getBook(id);
			
			System.out.println(book);
			System.out.println(book.getAvailableCopies()!=0);
			
			if(book.getAvailableCopies()!=0) {
				return ResponseEntity. status(500).body("책을 대여한 사용자가 있어 삭제가 불가능합니다.");
				}
			
			//반환값이 false일경우 이미지 삭제 실패
			if(!cloudService.deleteFileFromUrl(book.getImagePath())) {
				return ResponseEntity.ok(ResponseMesaages.FAILURE);
			};
			
			//반환값이 0일경우 삭제된 행이 없으므로 실패
			if(bookService.deleteBook(id)==0) {
				return ResponseEntity.ok(ResponseMesaages.FAILURE);
			};
		} catch (Exception e) {
			return ResponseEntity. status(500).body(ResponseMesaages.ERROR);
		}

		return ResponseEntity.ok(ResponseMesaages.SUCCESS);
	}

	// GET: /api/booklist?category= & keyword= & option= & page=
	// 해당 조건에 맞는 도서 정보 리스트 반환
	@GetMapping("/booklist")
	public ResponseEntity<Map<String, Object>> getBookList(@ModelAttribute SearchDto search) {
		System.out.println(search);        
        
		Map<String, Object> booksData = new HashMap<String, Object>();

		List<BookDto> books = bookService.getBooks(search);
		//페이지수=조건에 해당하는 전체 책수/한페이지에 보여줄 도서정보의 수 +1;
		long pageCount=(bookService.getBookCount(search)/search.getPaging())+1;
		
		booksData.put("bookList", books);
		booksData.put("pageCount", pageCount);

		return ResponseEntity.ok(booksData);
	}


	// GET: /api/loan?bookid= &userid=
	//해당 유저가 해당 도서를 대출했다면 대출내역 반환
	@GetMapping("/loan")
	public ResponseEntity<LoanDto> getloan (@RequestParam("bookid") long bookId,@RequestParam("userid") long userId) {
		return ResponseEntity.ok(loanService.getLoan(userId, bookId));

	}
	
	// POST: /api/loan
	// 해당 대출정보를 DB에 저장
	@PostMapping("/loan")
	public ResponseEntity<String> createLoan(@RequestBody LoanDto loan) {

		System.out.println("createLoan");

		try {
			//반환값이 0일경우 추가된 행이 없으므로 실패
			if(loanService.createLoan(loan)==0) {
				return ResponseEntity.ok(ResponseMesaages.FAILURE);
			};
		} catch (Exception e) {
			return ResponseEntity. status(500).body(ResponseMesaages.ERROR);
		}

		return ResponseEntity.ok(ResponseMesaages.SUCCESS);
	}

	// PUT: /api/loan
	// 해당 대출정보를 DB에서 수정
	@PutMapping("/loan")
	public ResponseEntity<String> updateLoan(@RequestBody LoanDto loan) {

		System.out.println(loan);
		try {			
			//반환값이 0일경우 삭제된 행이 없으므로 실패
			if(loanService.updateLoan(loan)==0) {
				return ResponseEntity.ok(ResponseMesaages.FAILURE);
			};
		} catch (Exception e) {
			return ResponseEntity. status(500).body(ResponseMesaages.ERROR);
		}

		return ResponseEntity.ok(ResponseMesaages.SUCCESS);
	}

	// GET: /api/loanlist?id= & page= & paging= & returned=
	// 해당 조건에 맞는 도서 정보 리스트 반환
	@GetMapping("/loanlist")
	public ResponseEntity<Map<String, Object>> getloanList(@ModelAttribute SearchDto search) {
		System.out.println(search);
		Map<String, Object> loansData = new HashMap<String, Object>();

		List<LoanDto> loans = loanService.getLoans(search);
		
		//페이지수는 대출내역총합/페이징할 데이터수+1;
		long pageCount = (loanService.getLoanCount(search)/search.getPaging()+1);
		
		loansData.put("loanList", loans);
		loansData.put("pageCount", pageCount);

		return ResponseEntity.ok(loansData);
	}	
	
	// GET: /api/user?id=
	// 해당 조건에 해당하는 유저 정보 반환
	@GetMapping("/user")
	public ResponseEntity<UserDto> getUser(@RequestParam long id) {
		System.out.println(id);

		return ResponseEntity.ok(userService.getUser(id));
	}

	// POST: /api/user
	//	해당유저정보를 DB에 저장
	@PostMapping("/user")
	public ResponseEntity<?> createUser(@Validated @RequestBody UserDto user,BindingResult result ) {
		if (result.hasErrors()) {
			System.out.println(result.getAllErrors().get(0).getDefaultMessage());
	        return ResponseEntity.badRequest().body(result.getAllErrors().get(0).getDefaultMessage());
	    }
		try {			
			//true일경우 추가성공 
			if(!userService.createUser(user)) {
				return ResponseEntity.ok(ResponseMesaages.FAILURE);
			};
		} catch (Exception e) {
			return ResponseEntity. status(500).body(e.getMessage());
		}

		return ResponseEntity.ok(ResponseMesaages.SUCCESS);
	
	}
	
	//PUT: /api/user
	// 해당 유저의 정보를 수정
	@PutMapping("/user")
	public ResponseEntity<String> putUserEmail(@RequestBody UserDto user){
		try {
			userService.updateUser(user);
			
		} catch (Exception e) {
			return ResponseEntity.status(500).body(e.getMessage());
		}
		
		return ResponseEntity.ok(ResponseMesaages.SUCCESS);
	}
	
	// DELETE: /api/user?id=
	// 해당 조건에 해당하는 유저 정보 삭제
	@DeleteMapping("/user")
	public ResponseEntity<String> deleteUser(@RequestParam long id) {
		System.out.println(id);
		SearchDto search=new SearchDto();
		search.setId(id);
		search.setReturned(true);
		
		try {			
			if(loanService.getLoanCount(search)!=0) {
				return ResponseEntity.status(500).body("대여한 도서가 있으므로 삭제가 불가능합니다.");
			}
			
			//반환값이 0일경우 삭제된 행이 없으므로 실패
			if(userService.deleteUser(id)==0) {
				return ResponseEntity.ok(ResponseMesaages.FAILURE);
			};
		} catch (Exception e) {
			return ResponseEntity. status(500).body(ResponseMesaages.ERROR);
		}

		return ResponseEntity.ok(ResponseMesaages.SUCCESS);
	}

	// GET: /api/userlist?page=&paging=
	// 해당 조건에 해당하는 유저 정보 리스트 반환
	@GetMapping("/userlist")
	public ResponseEntity<Map<String, Object>> getUserList(@ModelAttribute SearchDto search) {
		System.out.println(search);

		Map<String, Object> usersData = new HashMap<String, Object>();

		List<UserDto> users = userService.getUsers(search);

		long pageCount = (userService.getUserCount()/search.getPaging()+1);

		
		usersData.put("userList", users);
		usersData.put("pageCount", pageCount);
		
		return ResponseEntity.ok(usersData);

	}
	

}
