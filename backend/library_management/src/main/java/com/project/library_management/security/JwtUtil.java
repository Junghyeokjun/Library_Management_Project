package com.project.library_management.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtUtil {

    @Value("${jwt.secret}")
    private String secretKey;

    private static final long EXPIRATION_TIME = 30*60*1000; // 30분
    private static final long REFRESH_EXPIRATION_TIME = 2*60*60*1000; // 2시간

    
    //유저 아이디 기반으로 액세스토큰생성
    public String generateToken(UserDetails userDetails) {
    	
    	Map<String,Object> claims=new HashMap<String, Object>();
    	claims.put("role", userDetails.getAuthorities());
    
    	//추후 해당 생성메서드에 받는 파라미터를 CustomUserDetails로 변경할경우 명시적 형변환 제거
    	claims.put("id", ((CustomUserDetails)userDetails).getId());
    	
        return createToken(claims, userDetails.getUsername(),EXPIRATION_TIME);
    }

    //유저 아이디 기반으로 리프레쉬 토큰 생성
    public String generateRefreshToken(UserDetails userDetails) {
    	Map<String,Object> claims=new HashMap<String, Object>();
    	claims.put("role", userDetails.getAuthorities());
    	
        return createToken(claims, userDetails.getUsername(),REFRESH_EXPIRATION_TIME);
    }
    //
    public String refreshAccessToken(String refreshToken) {
    	
    	Claims claims = getAllClaimsFromToken(refreshToken); 
	    String username = claims.getSubject(); 
	    Map<String, Object> newClaims = new HashMap<>(claims);

	    return createToken(newClaims, username, EXPIRATION_TIME); 
	}
    
    //토큰에서 유저 아이디 추출
    public String getUsernameFromToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    //토큰의 유효성 확인
    public boolean validateToken(String token) {
        return !isTokenExpired(token);
    }

    //토큰 생성 메서드
    private String createToken(Map<String,Object> claims,String username,long expirationTime) {
    	return Jwts.builder()
        		.setClaims(claims)
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();
    }
    
    
   //토큰에서 특정 클레임객체 추출
   private <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    //토큰에서 모든 클레임객체 추출
    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody();
    }

    //토큰의 만료시간 추출후 현재시간과 비교하여 여부 반환
    private boolean isTokenExpired(String token) {
        final Date expiration = getClaimFromToken(token, Claims::getExpiration);
        return expiration.before(new Date());
    }
}
