package com.creds.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.creds.backend.Model.PostUser;
import com.creds.backend.Service.PostUserService;

@Controller
@RequestMapping(value = {"/api/v1/addUser"}, method = {RequestMethod.POST})
@ResponseBody
public class PostUserController {
    @Autowired
    private PostUserService postUserService;

    @PostMapping
    public String addUser(@RequestBody PostUser postUser){
        return postUserService.addUser(postUser);
    }
}
