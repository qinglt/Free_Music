import axios from 'axios'
import BACKURL from './backConfig'

const host = BACKURL

export default {
  /**
   * @msg: 返回歌单里指定歌单ID的歌曲
   * @param {Number} songListId
   * @return: {Promise}
   */
  getListSongOfSongId (songListId) {
    return axios.get(`${host}/listSong/detail?songListId=${songListId}`)
  }
}
