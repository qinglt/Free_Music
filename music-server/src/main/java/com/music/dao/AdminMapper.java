package com.music.dao;

import com.music.pojo.Admin;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminMapper {

    /**
     * @Description
     * @Param id
     * @return int
     * @Author qinghua
     * @Date 2022/5/2 9:44
     **/
    int deleteByPrimaryKey(Integer id);

    int insert(Admin record);

    int insertSelective(Admin record);

    Admin selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Admin record);

    int updateByPrimaryKey(Admin record);

    int verifyPassword(String username, String password);

}