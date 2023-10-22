package com.creds.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	@RequestMapping("/")
	public String root(){
		return 
		"{\n"+
			"/api/v1/addCreds : Add new credential,\n"+
			"/api/v1/addUser : Add new user\n"+
		"}";
	}

}
