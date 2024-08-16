package com.project.library_management.mapper;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.project.library_management.constant.LoanAvailabilityOption;
import com.project.library_management.dto.LoanDto;
import com.project.library_management.dto.SearchDto;

@SpringBootTest
class LoanMapperTest {

	@Autowired
	LoanMapper loanMapper;

	
	@Disabled
	@Test
	//대출정보 획득 테스트
	public void selectLoanTest() {
		System.out.println(loanMapper.selectLoan(1, 4));
	}
	
	@Disabled
	@Test
	//대출정보 리스트 획득 테스트
	public void selectLoansTest() {
		SearchDto search=new SearchDto();
		for (LoanDto loan : loanMapper.selectLoans(search)) {
			System.out.println(loan.getLoanId());
		}
	}

	@Disabled
	@Test
	//조건을 충족하는 대출정보 총 개수 획득 테스트
	public void selectLoanCountTest() {
		SearchDto search=new SearchDto();
		System.out.println(loanMapper.selectLoanCount(search));
		
	}
	
	@Disabled
	@Test
	//대출정보 삽입 테스트
	public void insertLoanTest() {
		LoanDto loan= new LoanDto();
		loan.setUserId(1);
		loan.setBookId(4);
		System.out.println(loanMapper.insertLoan(loan));
		
	}

	@Disabled
	@Test
	//대출정보 수정 테스트
	public void updateLoanTest() {
		System.out.println(loanMapper.updateLoan(3));
		
	}
	
	@Disabled
	@Test
	//대출시 도서 현재 수량 반영 테스트
	public void updateCopiesTest() {
		System.out.println(loanMapper.updateCopies(1, LoanAvailabilityOption.LOAN_LOAN));
		System.out.println(loanMapper.updateCopies(1, LoanAvailabilityOption.LOAN_RETURN));
	}
	
	



}
