package com.project.library_management.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer{
	@Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000") // React 앱이 실행되는 URL
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*");
    }
	
	 @Override
	    public void addViewControllers(ViewControllerRegistry registry) {
	        // 점(.)이 포함되지 않은 경로는 모두 index.html로 리디렉션 (예: /home, /about 등)
	        registry.addViewController("/{spring:[^.]*}").setViewName("forward:/");

	        // 점(.)이 포함되지 않은 모든 하위 경로도 index.html로 리디렉션 (예: /user/profile 등)
	        registry.addViewController("/**/{spring:[^.]*}").setViewName("forward:/");

	        // 추가: 확장자가 없는 특정 경로도 포함
	        registry.addViewController("/{spring:[^.]*}/**{spring:[^.]*}")
	                .setViewName("forward:/");
	    }
}
