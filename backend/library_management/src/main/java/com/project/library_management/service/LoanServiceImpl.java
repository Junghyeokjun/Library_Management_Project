package com.project.library_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.library_management.dto.LoanDto;
import com.project.library_management.dto.SearchDto;
import com.project.library_management.mapper.LoanMapper;

@Service
public class LoanServiceImpl implements LoanService {

	@Autowired
	LoanMapper loanMapper;
	
	@Transactional
	@Override
	public int createLoan(LoanDto loan) {
		
		return loanMapper.insertLoan(loan);
	}

	@Transactional
	@Override
	public int updateLoan(long id) {
		
		return loanMapper.updateLoan(id);
	}

	@Override
	public List<LoanDto> getLoans(SearchDto search) {
		
		return loanMapper.selectLoans(search);
	}

	@Override
	public long getLoanCount(SearchDto search) {
		return loanMapper.selectLoanCount(search);
	}

}
