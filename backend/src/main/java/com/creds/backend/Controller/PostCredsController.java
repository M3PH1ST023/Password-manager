package com.creds.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.creds.backend.Model.PostCreds;
import com.creds.backend.Service.PostCredsService;

@Controller
@RequestMapping(value = {"/api/v1/addCreds"}, method = {RequestMethod.POST})
@ResponseBody
public class PostCredsController {
    @Autowired
    private PostCredsService postCredsService;

    @PostMapping
    public String addCreds(@RequestBody PostCreds postCreds){
        return postCredsService.addCreds(postCreds);
    }
}
