import axios from 'axios';
import { notification } from 'ant-design-vue';

function request(opt) {
  return axios(opt)
    .then(res => res)
    .catch(e => {
      const {
        response: { status, statusText },
      } = e;
      notification.error({
        // eslint-disable-next-line
        message: h => (
          <div>
            请求错误：<span style="color:red">{status}</span>, {opt.url}
          </div>
        ),
        description: statusText,
      });
      return Promise.reject(e);
    });
}

export default request;
