package com.project.library_management.entity;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

//이름          널?       유형     
//----------- -------- ------ 
//LOAN_ID     NOT NULL NUMBER 
//USER_ID     NOT NULL NUMBER 
//BOOK_ID     NOT NULL NUMBER 
//LOAN_DATE            DATE   
//RETURN_DATE          DATE   

//대출내역을 나타내는 엔티티 클래스입니다.
//이 클래스는 loans 테이블과 매핑됩니다.

@AllArgsConstructor
@Setter
@Getter
public class Loan {

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
	
}
