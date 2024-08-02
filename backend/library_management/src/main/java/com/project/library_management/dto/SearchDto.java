package com.project.library_management.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

//대출정보를 나타내는 DTO 클래스입니다.
//이 클래스는 검색,페이징 DTO이므로 매핑되는 엔티티가 존재하지 않습니다.

@Getter
@Setter
@ToString
public class SearchDto {
	
	//검색시 회원을 구분할 id입니다.(마이페이지)
	private long id;
	
	//현재 페이지값입니다.
	private long page;

	//페이징할 게시물의 단위입니다.
	private long paging;
	
	//검색 카테고리 정보입니다.
	private String category;
	
	//검색 키워드 입니다.
	private String keyword;
	
	//검색 옵션입니다.
	private String option;
	
	//반납여부입니다.(관리자 대출내역 조회 및 마이페이지 대출현황)
	private boolean returned;
	
	
}
