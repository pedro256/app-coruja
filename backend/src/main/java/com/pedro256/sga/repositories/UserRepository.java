package com.pedro256.sga.repositories;

import com.pedro256.sga.models.UserEntity;
import com.pedro256.sga.repositories.base.BaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends BaseRepository<UserEntity,String> {
}
