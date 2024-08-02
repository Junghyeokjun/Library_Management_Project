package com.project.library_management.dto;

import java.time.LocalDate;

import com.project.library_management.entity.Book;
import com.project.library_management.entity.Loan;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

//대출정보를 나타내는 DTO 클래스입니다.
//이 클래스는 book,loan 엔티티와 매핑됩니다.

@Getter
@Setter
@ToString
public class LoanDto {

	//각 대출내역을 식별하는 ID입니다.
	private long loanId;
	
	//각 유저를 식별하는 ID입니다.
	private long userId;
	
	//각 도서를 식별하는 ID입니다.
	private long bookId;
	
	//대출을 시행한 날짜입니다.
	private LocalDate loanDate;
	
	//반납을 시행한 날짜입니다.
	private LocalDate returnDate;
	
	//연체여부 입니다.
	private char overDue;
	
	//아래 있는 두개의 변수는 대출내역에 필요한 변수이므로 추가하였습니다.
	
	//도서의 제목입니다.
	private String title;

	//도서의 저자입니다.
	private String author;

	//도서의 이미지링크입니다.
	private String imagePath;

	//Loan 엔티티를 이용해 데이터를 입력하는 세터함수입니다.
	public void setLoan(Loan loan) {
		this.setLoanId(loan.getLoanId());
		this.setLoanId(loan.getBookId());
		this.setLoanId(loan.getUserId());
		this.setLoanDate(loan.getLoanDate());
		this.setReturnDate(loan.getReturnDate());
		this.setOverDue(loan.getOverDue());
	}
	
	//Book 엔티티를 이용해 데이터를 입력하는 세터함수입니다.
	public void setBook(Book book) {
		this.setTitle(book.getTitle());
		this.setAuthor(book.getAuthor());
		this.setImagePath(book.getImagePath());
	}
}
