package com.creds.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.creds.backend.Model.PostUser;
import com.creds.backend.Repository.PostUserRepo;

@Service
public class PostUserService {
    @Autowired
    private PostUserRepo postUserRepo;

    public String addUser(PostUser postUser){
        postUserRepo.save(postUser);
        return "success";
    }
}
