package com.project.library_management.service;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.project.library_management.dto.LoanDto;
import com.project.library_management.dto.SearchDto;


@SpringBootTest
class LoanServiceTest {
	
	@Autowired
	LoanService loanService;
	

	@Disabled
	@Test
	//대출내역을 반환하는 로직 테스트
	void getLoanTest() {
		System.out.println(loanService.getLoan(1,1));
	}
	
	@Disabled
	@Test
	@Transactional
	//대출내역을 삽입하는 로직 테스트
	void createLoanTest() {
		System.out.println(loanService.createLoan(loanService.getLoan(1,1)));
	}
	
	@Disabled
	@Test
	@Transactional
	//대출내역을 수정하는 로직 테스트
	void updateLoanTest() {
		System.out.println(loanService.updateLoan(loanService.getLoan(1, 1)));
	}
	
	@Disabled
	@Test
	//조건에 맞는 도서정보 리스트를 반환하는 로직 테스트
	void getLoansTest() {
		for (LoanDto loan : loanService.getLoans(new SearchDto())) {
			System.out.println(loan);
		}
	}
	
	@Disabled
	@Test
	//조건에 맞는 도서정보 개수를 반환하는 로직 테스트
	void getLoanCountTest() {
		System.out.println(loanService.getLoanCount(new SearchDto()));
	}
	

}
