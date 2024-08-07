package com.project.library_management.security;

import java.util.Collection;
import java.util.HashSet;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

//시큐리티에 사용되는 유저객체
public class CustomUserDetails implements UserDetails {

	private static final long serialVersionUID = 1L;
	private String username;
    private String password;
    private long id;
    private Collection<GrantedAuthority> authorities;
	
    public CustomUserDetails(String username, String password,long id, String role) {
    	this.username=username;
    	this.password=password;
    	this.id=id;
    	this.authorities=new HashSet<GrantedAuthority>();
    	this.authorities.add(new SimpleGrantedAuthority(role));
    }
    
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return this.authorities;
	}

	@Override
	public String getPassword() {
		return this.password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return this.username;
	}
	
	public long getId() {
		return this.id;
	}
	
	// 계정의 만료 여부를 설정합니다.
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	// 계정의 잠금 여부를 설정합니다.
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}
	
	// 자격 증명의 만료 여부를 설정합니다.
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	//계정활성화 여부를 설정합니다.
	@Override
	public boolean isEnabled() {
		return true;
	}

}
