/**
 * Author:Vinsea.
 * CreateDate:2017/6/9 14:05.
 * Describe:系统配置
 */
const BASE_URL = '/uubian'
export default {
  /** 接口地址配置 */
  baseUrl: BASE_URL,
  baseApiUrl: BASE_URL + '/web/api',
  baseCommentUrl: BASE_URL + '/comment/api',

  /** 是否是发布状态，不是的话会显示网站上线倒计时 */
  isPublish:true
}
