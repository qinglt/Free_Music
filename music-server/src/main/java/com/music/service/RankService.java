package com.music.service;

import com.music.pojo.Rank;

public interface RankService {

    int rankOfSongListId(Long songListId);

    boolean addRank(Rank rank);

    Integer getUserRank(Long consumerId, Long songListId);

}
