package com.creds.backend.Model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "Creds")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostCreds {
    @Id
    private ObjectId id;
    private int userId;
    private String userName;
    private String userPass;
    private String userEmail;
    private String url;
    private String comments;
}
