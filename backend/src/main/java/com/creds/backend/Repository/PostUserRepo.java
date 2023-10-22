package com.creds.backend.Repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.creds.backend.Model.PostUser;

@Repository
public interface PostUserRepo extends MongoRepository<PostUser, ObjectId>{
    
}
