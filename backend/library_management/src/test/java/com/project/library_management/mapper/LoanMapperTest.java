package com.project.library_management.mapper;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.project.library_management.dto.LoanDto;
import com.project.library_management.dto.SearchDto;

@SpringBootTest
class LoanMapperTest {

	@Autowired
	LoanMapper loanMapper;

	@Disabled
	@Test
	public void selectLoansTest() {
		SearchDto search=new SearchDto();
		for (LoanDto loan : loanMapper.selectLoans(search)) {
			System.out.println(loan.getLoanId());
		}
	}

	@Disabled
	@Test
	public void selectLoanCountTest() {
		SearchDto search=new SearchDto();
		System.out.println(loanMapper.selectLoanCount(search));
		
	}
	
	@Disabled
	@Test
	public void insertLoanTest() {
		LoanDto loan= new LoanDto();
		loan.setUserId(1);
		loan.setBookId(4);
		System.out.println(loanMapper.insertLoan(loan));
		
	}
	
	@Disabled
	@Test
	public void updateLoanTest() {
		System.out.println(loanMapper.updateLoan(3));
		
	}


}
