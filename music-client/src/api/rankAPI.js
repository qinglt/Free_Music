import axios from 'axios'
import BACKURL from './backConfig'

const host = BACKURL

export default {
  /**
   * @msg: 提交评分
   * @param {Number} songListId
   * @param {Number} userId
   * @param {Number} score
   * @return: {Promise}
   */
  setRank (songListId, userId, score) {
    var params = new URLSearchParams()
    params.append('songListId', songListId)
    params.append('consumerId', userId)
    params.append('score', score)
    return axios.post(`${host}/rank/add`, params)
  },

  /**
   * @msg: 获取指定歌单的评分
   * @param {Number} songListId
   * @return: {Promise}
   */
  getRankOfSongListId (songListId) {
    return axios.get(`${host}/rank?songListId=${songListId}`)
  },

  /**
   * @msg: 获取指定用户的评分
   * @param {Number} songListId
   * @param {Number} userId
   * @return: {Promise}
   */
  getUserRank (songListId, userId) {
    return axios.get(`${host}/rank/user?consumerId=${userId}&songListId=${songListId}`)
  }

}
