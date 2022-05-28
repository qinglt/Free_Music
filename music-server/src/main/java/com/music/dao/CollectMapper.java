package com.music.dao;

import com.music.pojo.Collect;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CollectMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Collect record);

    int insertSelective(Collect record);

    Collect selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Collect record);

    int updateByPrimaryKey(Collect record);

    int existSongId(@Param("userId") Integer userId, @Param("songId") Integer songId);

    int updateCollectMsg(Collect collect);

    int deleteCollect(Integer id);

    List<Collect> allCollect();

    List<Collect> collectionOfUser(Integer userId);
}
