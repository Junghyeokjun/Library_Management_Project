package com.project.library_management.service;

import java.util.List;

import com.project.library_management.dto.LoanDto;
import com.project.library_management.dto.SearchDto;

public interface LoanService {

	//해당 대출정보를 DB에 저장하는 메서드
	public int createLoan(LoanDto loan);
	
	//해당 아이디의 대출정보를 DB에서 수정하는 메서드
	public int updateLoan(long id);
	
	//해당하는 조건에 맞는 도서 정보 리스트를 반환하는 메서드
	public List<LoanDto> getLoans(SearchDto search);
	
	//해당하는 조건에 맞는 도서의 총 개수를 반환하는 메서드
	public long getLoanCount(SearchDto search);
	
}
