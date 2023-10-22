package com.creds.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.creds.backend.Model.PostCreds;
import com.creds.backend.Repository.PostCredsRepo;
@Service
public class PostCredsService {
    @Autowired
    private PostCredsRepo postCredsRepo;

    public String addCreds(PostCreds postCreds){
        postCredsRepo.save(postCreds);
        return "success";
    }
}
